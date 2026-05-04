import { cn } from "../../../utils/utils";
import React, { useEffect, useState, useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronRight, ChevronLeft } from "../../icons/UIIcons";


const FRAME_OFFSET = -30;
const FRAMES_VISIBLE_LENGTH = 3;


function clamp(val: number, [min, max]: [number, number]): number {
    return Math.min(Math.max(val, min), max);
}

export const ProjectCard = <T,>({
    item,
    renderItem,
    index,
    activeIndex,
    totalCards
}: {
    item: T
    index: number
    activeIndex: number
    totalCards: number
    renderItem: (
        item: T,
        index: number,
        activeIndex: number,
        totalCards: number,
    ) => React.ReactNode
}) => {

    const shouldReduceMotion = useReducedMotion()
    const offsetIndex = index - activeIndex



    const blur = activeIndex > index ? 2 : 0
    const opacity = activeIndex > index ? 0 : 1
    const scale = shouldReduceMotion
        ? 1
        : clamp(1 - offsetIndex * 0.08, [0.08, 2]);

    const y = shouldReduceMotion
        ? 0
        : clamp(offsetIndex * FRAME_OFFSET, [
            FRAME_OFFSET * FRAMES_VISIBLE_LENGTH,
            Number.POSITIVE_INFINITY
        ])


    const isActive = index === activeIndex;
    return (
        <motion.div
            initial={{y: y + 20 , scale: scale - 0.05, opacity: 0}}
            animate={{
                y,
                scale,
                opacity,
                transition: {
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.5,
                    duration: 0.5,
                    delay: index * 0.05
                },
            }}
            className="absolute overflow-hidden rounded-3xl left-1/2 w-[calc(100%-2rem)] max-w-[600px] -translate-x-1/2 -translate-y-1/2"
            style={{
                filter: `blur(${blur}px)`,
                opacity,
                zIndex: totalCards - index,
                pointerEvents: isActive ? "auto" : "none",
                top: "50%",
                willChange: "transform, opacity"
            }}
        >
            {renderItem(item, index, activeIndex, totalCards)}

        </motion.div>
    )
}


export interface NavegationButtonsProps {
    direction: "prev" | "next";
    onClick: () => void;
    disable: boolean;
}


function NavigationButton({
    direction,
    onClick,
    disable,
}: NavegationButtonsProps) {
    const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
    return (
        <button
            aria-label={direction === "prev" ? "Anterior" : "Siguiente"}
            className={cn(" group relative z-0 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700/20 bg-zinc-900/60 backdrop-blur-sm transition-all duration-200",
                disable
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer  hover:bg-zinc-700/70 hover:shadow-lg"
            )}
            disabled={disable}
            onClick={onClick}
            type="button">
            <Icon
                className={cn("h-3.5 w-3.5 text-gray-100/70 transition-colors",
                    "group-hover:text-zinc-100 group-disabled:text-zinc-100/20"
                )}
            />

        </button>
    )
}

export interface ProjectsCarruselProps<T> {
    items: T[],
    renderItem: (
        item: T,
        index: number,
        activeIndex: number,
        totalCards: number
    ) => React.ReactNode
    getKey?: (item: T, index: number) => string | number;
    className?: string;
    height?: string;
    excludeIds?: (string | number)[];
    showIndicators?: boolean;
    showNavigation?: boolean;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}
export const ProjectsCarrusel = <T,>({
    items,
    renderItem,
    className,
    excludeIds = [],
    showIndicators = true,
    showNavigation = true,
    autoPlay = false,
    autoPlayInterval = 5000,

}: ProjectsCarruselProps<T>) => {

    const filteredProjects = useMemo(() => {
        if (excludeIds.length === 0) {
            return items;
        }


        const excludeSet = new Set(excludeIds);
        const projectsLength = items.length;
        const results: typeof items = [];

        for (let i = 0; i < projectsLength; ++i) {
            if (!excludeSet.has(i)) {
                results.push(items[i]);
            }
        }

        return results;

    }, [excludeIds, items])

    const maxIndex = filteredProjects.length - 1;
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!autoPlay || maxIndex < 0) {
            return;
        }

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                if (prevIndex >= maxIndex) {
                    return 0;
                }
                return prevIndex + 1;
            });
        }, autoPlayInterval)

        return () => {
            clearInterval(interval)
        };
    }, [autoPlay, autoPlayInterval, maxIndex])


    // keyboar Navegation
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "ArrowLeft") {
                setActiveIndex((i) => clamp(i - 1, [0, maxIndex]));
            } else if (event.key === "ArrowRight") {
                setActiveIndex((i) => clamp(i + 1, [0, maxIndex]));
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, [maxIndex])

    const goToPrevious = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex > 0) {
                return prevIndex - 1
            }
            return prevIndex;
        })
    }

    const goToNext = () => {
        setActiveIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex <= maxIndex ? newIndex : prevIndex
        });
    };

    if (filteredProjects.length === 0) {
        return null
    }
    return (
        <div className={cn("relative w-full h-[400px] md:h-[500px]", className)}
            
        >
            {items.map((item, index) => (
                <ProjectCard
                    key={index}
                    item={item}
                    index={index}
                    activeIndex={activeIndex}
                    totalCards={items.length}
                    renderItem={renderItem} />
            ))}

            {/* Navegation buttons */}
            {(showNavigation || showIndicators) && (
                <div className=" absolute bottom-0  left-1/2 z-50 flex -translate-x-1/2 justify-center items-center gap-5">
                     {showNavigation && (
                            <NavigationButton
                                direction="prev"
                                disable={activeIndex <= 0}
                                onClick={goToPrevious} />
                        )}
                    {showIndicators && (
                        <div className="flex items-center gap-2">
                            {filteredProjects.map((_, index) => (
                                <button
                                    aria-label={`Ir al proyecto ${index + 1}`}
                                    className={cn(
                                        "h-2 rounded-full transition-all duration-200",
                                        index === activeIndex
                                            ? " w-8 bg-purple-500"
                                            : " w-2 bg-purple-500/30 hover:bg-purple-500/50"
                                    )}
                                    key={index}
                                    onClick={() => {
                                        setActiveIndex(index);
                                    }}
                                    type="button"
                                />
                            ))}
                        </div>
                    )}
                      {showNavigation && (
                            <NavigationButton
                                direction="next"
                                disable={activeIndex === maxIndex}
                                onClick={goToNext} />
                        )}
                    
                </div>
            )}
        </div>
    )
}
