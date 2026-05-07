import { cn } from "../../../utils/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "motion/react";


const SCROLL_TIMEOUT_OFFSET = 100;
const MIN_SCROLL_INTERVAL = 300;
const SCROLL_THRESHOLD = 20;
const TOUCH_SCROLL_THRESHOLD = 100;
const SCALE_FACTOR = 0.08;
const MIN_SCALE = 0.08;
const MAX_SCALE = 2;
const CARD_PADDING = 100;

export interface ScrollableCardProps<T> {
    items: T[]
    renderItem: (
        item: T,
        context: {
            index: number
            isActive: boolean
            isHovered: boolean
            isScrolling: boolean
            cardHeight?: number;
            perspective?: number;
            transitionDuration?: number;
        }
    ) => React.ReactNode
    cardHeight?: number;
    perspective?: number;
    transitionDuration?: number;
    className?: string;
}

const ScrollableCardStack = <T,>({
    items,
    renderItem,
    cardHeight = 384,
    perspective = 1000,
    transitionDuration = 180,
    className,
}: ScrollableCardProps<T>) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [hoveredIndex, sethoveredIndex] = useState<number | null>(null)
    const [isScrolling, setIsScrollling] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollY = useMotionValue(0)
    const lastScrollTime = useRef(0)
    const shouldReduceMotion = useReducedMotion()


    // Calcular el indice maximo para evitar desbordamientos
    const totalItems = items.length
    const maxIndex = totalItems - 1



    // constantes para el calculo de transformaciones
    const FRAME_OFFSET = -30;
    // cantidad de tarjetas visibles para el calculo del offset
    const FRAMES_VISIBLE_LENGTH = 3;
    // distancia de snap para el scroll, se puede ajustar para hacer que el scroll sea mas o menos sensible
    const SNAP_DISTANCE = 50;


    // Clamp function
    const clamp = useCallback(
        (val: number, [min, max]: [number, number]): number =>
            Math.min(Math.max(val, min), max),
        []
    );

    // controlador scroll function, maneja la logica de scroll y actualiza el indice actual y el valor de scrollY

    const scrollTopCard = useCallback((direction: 1 | -1) => {
        if (isScrolling) {
            return
        }

        const now = Date.now()
        const timeSinceLastScroll = now - lastScrollTime.current

        if (timeSinceLastScroll < MIN_SCROLL_INTERVAL) {
            return;
        }

        const newIndex = clamp(currentIndex + direction, [0, maxIndex])

        if (newIndex !== currentIndex) {
            lastScrollTime.current = now
            setIsScrollling(true)
            setCurrentIndex(newIndex)
            scrollY.set(newIndex * SNAP_DISTANCE)

            setTimeout(() => {
                setIsScrollling(false)
            }, transitionDuration + SCROLL_TIMEOUT_OFFSET)
        }
    },
        [currentIndex, maxIndex, scrollY, isScrolling, transitionDuration, clamp]
    );

    // handle scroll events
    const handleScroll = useCallback(
        (deltaY: number) => {

            if (isDragging || isScrolling) {
                return;
            }
            if (Math.abs(deltaY) < SCROLL_THRESHOLD) {
                return
            }

            const ScrollDirection = deltaY > 0 ? 1 : -1
            scrollTopCard(ScrollDirection)
        },
        [isDragging, isScrolling, scrollTopCard]
    );

    // Handle wheel events
    const handleWheel = useCallback(
        (e: WheelEvent) => {
            e.preventDefault()
            handleScroll(e.deltaY)
        },
        [handleScroll]
    )

    // Handle keyboard navigation

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {

            if (isScrolling) {
                return
            }

            switch (e.key) {
                case "ArrowUp":
                case "ArrowLeft": {
                    e.preventDefault()
                    scrollTopCard(-1)
                    break;
                }
                case "ArrowDown":
                case "ArrowRight": {
                    e.preventDefault()
                    scrollTopCard(1)
                    break;
                }
                case "Home": {
                    e.preventDefault();
                    if (currentIndex !== 0) {
                        setIsScrollling(true)
                        setCurrentIndex(0)
                        scrollY.set(0)

                        setTimeout(() => {
                            setIsScrollling(false)
                        }, transitionDuration + SCROLL_TIMEOUT_OFFSET);
                    }
                    break;
                }

                case "End": {
                    e.preventDefault();
                    if (currentIndex !== maxIndex) {
                        setIsScrollling(true);
                        setCurrentIndex(maxIndex);
                        scrollY.set(maxIndex * SNAP_DISTANCE);
                        setTimeout(() => {
                            setIsScrollling(false)
                        }, transitionDuration + SCROLL_TIMEOUT_OFFSET)
                    }
                    break;
                }
                default: {
                    break;
                }
            }
        },
        [currentIndex, maxIndex, scrollY, isScrolling, scrollTopCard, transitionDuration]
    );

    // Handle touch events for mobile
    const touchStartY = useRef(0)
    const touchStartIndex = useRef(0)
    const touchStartTime = useRef(0)
    const touchMoved = useRef(false)

    const handleTouchSatrt = useCallback(
        (e: React.TouchEvent) => {
            touchStartY.current = e.touches[0].clientX;
            touchStartIndex.current = currentIndex;
            touchStartTime.current = Date.now();
            touchMoved.current = false;
            setIsDragging(true);
        },
        [currentIndex]
    );


    const handleTouchMove = useCallback(
        (e: React.TouchEvent) => {
            if (!isDragging || isScrolling) {
                return;
            }

            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY.current - touchY

            if (Math.abs(deltaY) > TOUCH_SCROLL_THRESHOLD && !touchMoved.current) {
                const scrollDirection = deltaY > 0 ? 1 : -1;
                scrollTopCard(scrollDirection);
                touchMoved.current = true;
            }
        },
        [isDragging, isScrolling, scrollTopCard]
    );

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false);
        touchMoved.current = false
    }, []);

    // Set up event listeners for wheel events

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, [handleWheel]);

    // Snap to current index when not dragging
    useEffect(() => {
        if (!isDragging) {
            scrollY.set(currentIndex * SNAP_DISTANCE);
        }
    }, [currentIndex, isDragging, scrollY]);

    // Calculate transform for each card based on the reference code
    const getCardTransform = useCallback(
        (index: number) => {
            const offsetIndex = index - currentIndex;

            // Apply blur effect to cards behind the current one - matching reference exactly
            const isBehindCurrent = currentIndex > index
            const blur = !shouldReduceMotion && isBehindCurrent ? 2 : 0;

            // Opacity based on distence
            const opacity = currentIndex > index ? 0 : 1;


            const scale = shouldReduceMotion
                ? 1
                : clamp(1 - offsetIndex * SCALE_FACTOR, [MIN_SCALE, MAX_SCALE])

            // Vertical offset whit improved calculation 
            const y = shouldReduceMotion
                ? 0
                : clamp(offsetIndex * FRAME_OFFSET, [
                    FRAME_OFFSET * FRAMES_VISIBLE_LENGTH,
                    Number.POSITIVE_INFINITY,
                ]);
            // z-index for layering
            const zIndex = items.length - index;

            const rotate = offsetIndex * -2

            return {
                y,
                scale,
                opacity,
                blur,
                zIndex,
                rotate,
            };
        },
        [currentIndex, clamp, shouldReduceMotion]
    )

    return (
        <section
            aria-atomic="true"
            aria-label="Scrollable card stack"
            aria-live="polite"
            className={cn("relative mx-auto h-fit w-fit min-w-[300px] ", className)}>
            <div
                aria-label="scrollable card container"
                className="h-full w-full"
                onKeyDown={handleKeyDown}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
                onTouchStart={handleTouchSatrt}
                ref={containerRef}
                role="application"
                style={{
                    minHeight: `${cardHeight + CARD_PADDING}px`,
                    perspective: `${perspective}px`,
                    perspectiveOrigin: "center 60%",
                    touchAction: "none"
                }}
                tabIndex={0}>

                {items.map((item, i) => {
                    const tranform = getCardTransform(i);
                    const isActive = i === currentIndex;
                    const isHovered = hoveredIndex === i;

                    return (
                        <motion.div
                            animate={
                                shouldReduceMotion
                                    ? { x: "-50%" }
                                    : {
                                        y: `calc(-50% + ${tranform.y}px)`,
                                        scale: tranform.scale,
                                        x: "-50%"
                                    }
                            }
                            aria-hidden={!isActive}
                            className=" absolute top-1/2 left-1/2 w-max max-w-[100vw]"
                            data-active={isActive}
                            initial={false}
                            key={`scrollable-card-${i}`}
                            onBlur={() => sethoveredIndex(null)}
                            onFocus={() => isActive && sethoveredIndex(i)}
                            onMouseEnter={() => isActive && sethoveredIndex(i)}
                            onMouseLeave={() => sethoveredIndex(null)}
                            style={{
                                height: `${cardHeight}px`,
                                zIndex: tranform.zIndex,
                                pointerEvents: isActive ? "auto" : "none",
                                transformOrigin: "center center",
                                willChange: shouldReduceMotion
                                    ? undefined
                                    : "opacity, filter, transform",
                                filter: `blur(${tranform.blur}px)`,
                                opacity: tranform.opacity,
                                rotate: tranform.rotate,
                                transitionProperty: shouldReduceMotion
                                    ? "none"
                                    : "opacity, filter",
                                transitionDuration: shouldReduceMotion ? "0ms" : "200ms",
                                transitionTimingFunction:
                                    "cubic-bezier(0.645, 0.045, 0.355, 1)",

                            }}
                            tabIndex={isActive ? 0 : -1}
                            transition={
                                shouldReduceMotion
                                    ? { duration: 0 }
                                    : {
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 20,
                                        mass: 0.5,
                                        duration: 0.25
                                    }
                            }
                        >
                            <div
                                className={cn("max-w-sm rounded-xl transition-all duration-200",
                                    isHovered && "shadow-2xl",
                                    isScrolling && isActive && "ring-2 ring-opacity-50")}
                                >

                                <div
                                    className="absolute inset-0 bg-gradient-to-br rounded-4xl from-purple-400/10 via-transparent to-transparent pointer-events-none" />
                                {isScrolling && isActive && (
                                    <div className=" absolute -top-1  left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-purple-500 opacity-10 " />
                                )}

                                {renderItem(item, {
                                    index: i,
                                    isActive,
                                    isHovered,
                                    isScrolling,
                                    cardHeight,
                                    perspective,
                                    transitionDuration,
                                })}
                            </div>
                        </motion.div>
                    )
                })}


                <div
                    aria-label="Card navigation"
                    className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2"
                    role="tablist">
                    {Array.from({ length: items.length }, (_, i) => (
                        <motion.button
                            aria-label={`Go to card ${i + 1} of ${items.length}`}
                            aria-selected={i === currentIndex}
                            className={cn("h-2 w-2 rounded-full transition-all duration-200 ",
                                i === currentIndex
                                    ? " w-4 scale-125 bg-gradient-to-tr from-purple-500 to-purple-600 shadow-lg shadow-purple-500/10"
                                    : " bg-zinc-600 hover:bg-zinc-400"
                            )}
                            key={`scrollable-indicator-${items[i], i}`}
                            onClick={() => {
                                if (i !== currentIndex && !isScrolling) {
                                    setIsScrollling(true)
                                    setCurrentIndex(i)
                                    scrollY.set(i * SNAP_DISTANCE)
                                    setTimeout(() => {
                                        setIsScrollling(false)
                                    }, transitionDuration + SCROLL_TIMEOUT_OFFSET)
                                }
                            }}
                            role="tab"
                            transition={{
                                type: "spring",
                                stiffness: 250,
                                damping: 20,
                                mass: 0.5
                            }}
                            type="button"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }} />
                    ))}
                </div>


            </div>

        </section>
    )
};



export default ScrollableCardStack;
