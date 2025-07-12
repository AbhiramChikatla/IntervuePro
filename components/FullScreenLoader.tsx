import React from "react";
import { cn } from "@/lib/utils";

interface FullScreenLoaderProps {
  isLoading: boolean;
  text?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  backdropColor?: string;
  backdropOpacity?: number;
}
const FullScreenLoader = () => {
  return (
    <div>
      Added sample Full Screen Loader
    </div>
  )
}

export default FullScreenLoader
