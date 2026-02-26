"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface SunriseButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    bgColor?: string;      // e.g., "bg-foreground" 
    hoverColor?: string;   // e.g., "bg-primary"
    textColor?: string;    // e.g., "text-white"
    hoverTextColor?: string; // e.g., "text-foreground"
    icon?: ReactNode;
}

/**
 * SunriseButton - A reusable premium button with a "sunrise" fill animation on hover.
 */
export const SunriseButton = ({
    text,
    onClick,
    className = "",
    bgColor = "bg-foreground",
    hoverColor = "bg-surface-alt",
    textColor = "text-background",
    hoverTextColor = "group-hover/btn:text-foreground",
    icon = <ArrowUpRight size={18} />
}: SunriseButtonProps) => {
    return (
        <motion.button
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={onClick}
            className={`relative inline-flex items-center gap-4 px-10 py-4.5 rounded-full overflow-hidden border border-black/5 ${bgColor} transition-all group/btn shadow-xl shadow-black/10 cursor-pointer ${className}`}
        >
            <motion.div
                variants={{
                    initial: { clipPath: "circle(0% at 50% 100%)" },
                    hover: { clipPath: "circle(150% at 50% 100%)" },
                }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute inset-0 ${hoverColor} z-0`}
            />
            <span
                className={`relative z-10 font-bold text-[11px] tracking-[0.2em] uppercase ${textColor} transition-colors duration-500 ${hoverTextColor} flex items-center gap-3`}
            >
                {text}
                <div className="transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                    {icon}
                </div>
            </span>
        </motion.button>
    );
};
