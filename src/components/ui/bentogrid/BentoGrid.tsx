import React from "react";

interface BentoGridProps {
    children: React.ReactNode
    cols?: number 
}

const colClasses: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
};


export const BentoGrids = ( { children, cols = 5 }:BentoGridProps ) => {
    return (
        <div className={` grid gap-6 ${colClasses[cols]}`}>
            {children}
        </div>
    )
}