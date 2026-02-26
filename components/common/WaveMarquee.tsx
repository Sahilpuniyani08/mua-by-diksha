"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

interface WaveMarqueeProps {
    text: string;
    className?: string;
    color?: string;
    x?: MotionValue;
}

/**
 * A marquee where text flows through a wave path tied directly to the page scroll (scrollY).
 * The text moves as the user scrolls, creating a dynamic interaction.
 */
export const WaveMarquee = ({
    text,
    className = "",
    color = "fill-background ",
    x,
}: WaveMarqueeProps) => {


    // Long string for high-density tilinng
    const repeatedText = `${text}  •  ${text}  •  ${text}  •  ${text}  •  ${text}  •  ${text}  •  ${text}  •  ${text}  •  ${text}  •  ${text}  •  ${text}  •  `.toUpperCase();


    return (
        <div

            className={`relative w-full overflow-hidden flex items-center pointer-events-none `}
        >
            <svg
                viewBox="0 0 1000 150"
                className="w-[120%] -ml-[10%] h-auto overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <path
                        id="scrollWavePath"
                        d="M 0 75 C 125 -50, 125 200, 250 75 C 375 -50, 375 200, 500 75 C 625 -50, 625 200, 750 75 C 875 -50, 875 200, 1000 75"
                        fill="transparent"
                    />
                </defs>

                <text className={`font-heading text-5xl mx-10 md:text-2xl font-black  text-background tracking-widest md:tracking-widest ${color}  uppercase`}>
                    <motion.textPath
                        href="#scrollWavePath"
                        startOffset={x}
                        className="fill-background"
                    >
                        {repeatedText.split("")?.map((char, idx) => (
                            <tspan key={idx} className="fill-background ">{char}</tspan>
                        ))}
                    </motion.textPath>
                </text>
            </svg>
        </div>
    );
};
