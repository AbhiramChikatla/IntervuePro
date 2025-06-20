import { cn } from "@/lib/utils";
import React from "react";

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>;

const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-200/80 dark:bg-gray-700/40",
        className
      )}
      {...props}
    />
  );
};

export { Skeleton };