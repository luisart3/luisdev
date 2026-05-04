import { cn } from "../../../utils/utils";
import { motion, useReducedMotion } from "motion/react";
import React, { type ReactNode, useCallback, useId, useState } from "react";


export interface AnimatedTabsProps {
    tabs: { id: string; label: string; icon?: ReactNode, }[];
    children: ReactNode | ReactNode[];
    activeTab?: string;
    defaultTab?: string;
    onChange?: (tabId: string) => void;
    variant?: "underline" | "pill" | "segment";
    layoutId?: string;
    className?: string;

}

const SPRING = {
    type: "spring" as const,
    duration: 0.25,
    bounce: 0.05,
};


export default function AnimatedTabs({
    tabs,
    children,
    activeTab: controlledActiveTab,
    defaultTab,
    onChange,
    variant = "underline",
    layoutId: customLayoutId,
    className,
}: AnimatedTabsProps) {

    const shouldReduceMotion = useReducedMotion();

    const generatedId = useId();
    const layoutId = customLayoutId ?? `animate-tabs-${generatedId}`;

    const [internalActiveTab, setInternalActiveTab] = useState(
        defaultTab ?? tabs[0]?.id ?? ""
    )

    const isControlled = controlledActiveTab !== undefined;

    const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

    const handleTabChange = useCallback(
        (tabId: string) => {
            if (!isControlled) {
                setInternalActiveTab(tabId)
            }
            onChange?.(tabId)
        },
        [isControlled, onChange]
    );


    

    const baseContainerStyles = cn(
        "relative inline-flex mx-auto",
        variant === "underline" && " gap-1 border border-b",
        variant === "pill" && " gap-1 rounded-full bg-zinc-800 p-1",
        variant === "segment" && " gap-0 rounded-lg bg-zinc-900 p-1"
    );

    const getTabStyles = (isActive: boolean) =>
        cn(
            "relative z-10 flex items-center justify-center gap-2 px-4 py-2 font-medium text-sm transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            variant === "underline" && (isActive ? " text-white" : " text-zinc-500 hover:text-white"),
            variant === "pill" && (isActive ? " text-white" : " text-gray-500 hover:text-white"),
            variant === "segment" && (isActive ? " text-white" : " text-gray-500 hover:text-white"),
        );


    const getIndicatorStyles = () =>
        cn(
            "absolute",
            variant === "underline" && " right-0 -bottom-px left-0 h-0.5 bg-purple-600",
            variant === "pill" && " inset-0 rounded-full border border-white/20 bg-zinc-900 shadow-sm",
            variant === "segment" && " inset-0 rounded-md border bg-zinc-950 shadow-sm"

        )

    const childArray = React.Children.toArray(children);
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
    return (
        <div className="flex flex-col w-full">
            <div
                aria-label="Tabs"
                className={cn(baseContainerStyles, className)}
                role="tablist">
                {tabs.map((tab, index) => {
                    const isActive = activeTab === tab.id

                    return (
                        <button
                            aria-selected={isActive}
                            className={getTabStyles(isActive)}
                            id={`${layoutId}-tab-${tab.id}`}
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            role="tab"
                            tabIndex={isActive ? 0 : -1}
                            type="button"
                        >
                            {isActive && (
                                <motion.span
                                    className={getIndicatorStyles()}
                                    layout
                                    layoutId={layoutId}
                                    style={{ originY: "0px" }}
                                    transition={shouldReduceMotion ? { duration: 0 } : SPRING}
                                />
                            )}
                            {tab.icon && <span className="relative z-10">{tab.icon}</span>}
                            <span className="relative z-10">{tab.label}</span>

                        </button>
                    )
                })}
            </div>
            <div role="tabpanel" className="mt-6">
                {childArray[activeIndex] && (
                    <motion.div
                        key={tabs[activeIndex].id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {childArray[activeIndex]}
                    </motion.div>
                )}
            </div>
        </div>
    )
}


