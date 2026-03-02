"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FloralDecor } from "./common/floral";
import { testimonials } from "@/data/content/textimonials-data";

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(next, 8000);
        return () => clearInterval(timer);
    }, []);

    const current = testimonials[currentIndex];

    return (
        <section id="testimonials" className="relative  pt-62 pb-20 px-6 bg-linear-to-b from-foreground from-5%  via-20% via-foreground/50 to-30% to-background  overflow-hidden ">

            <div className="max-w-6xl mx-auto relative z-10 ">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">

                    {/* Prev Button - Desktop */}
                    <button
                        onClick={prev}
                        className="hidden md:flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-foreground/80 hover:text-primary transition-all duration-300 uppercase shrink-0 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>PREV</span>
                    </button>

                    {/* Testimonial Content */}
                    <div className="flex-1 w-full max-w-4xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col items-center"
                            >
                                {/* Quote Text */}
                                <div className="relative mb-10 md:mb-10">
                                    <h3 className="font-heading text-4xl sm:text-5xl md:text-5xl text-foreground text-center leading-[1.15] md:leading-[1.1] font-light">
                                        <span className="inline-block mr-4 opacity-40 italic">&ldquo;</span>
                                        {current.text}
                                        <span className="inline-block ml-4 opacity-40 italic">&rdquo;</span>
                                    </h3>
                                </div>

                                {/* Profile Section Wrapper */}
                                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8 pt-5 border-t border-foreground/80 ">

                                    {/* User Info */}
                                    <div className="flex items-center gap-5 text-left">
                                        {/* <div className="relative w-16 h-16 rounded-full overflow-hidden grayscale-[0.5] hover:grayscale-0 transition-all duration-500 ring-1 ring-foreground/10">
                                            <Image
                                                src={current.image}
                                                alt={current.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div> */}
                                        <div>
                                            <h4 className="font-body text-sm font-bold tracking-[0.2em] text-foreground uppercase">{current.name}</h4>
                                            {/* <p className="font-body text-xs text-foreground/40 mt-1">{current.email}</p> */}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Next Button - Desktop */}
                    <button
                        onClick={next}
                        className="hidden md:flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] text-foreground/80 hover:text-background transition-all duration-300 uppercase shrink-0 group"
                    >
                        <span>NEXT</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex md:hidden items-center justify-center gap-12 mt-16 pt-8 border-t border-foreground/60">
                    <button onClick={prev} className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-foreground/80 hover:text-primary uppercase group">
                        <ArrowLeft size={14} className="group-active:-translate-x-1 transition-transform" />
                        <span>PREV</span>
                    </button>
                    <button onClick={next} className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-foreground/80 hover:text-primary uppercase group">
                        <span>NEXT</span>
                        <ArrowRight size={14} className="group-active:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute -left-40 top-1/2  -translate-y-1/2 w-82 h-82  pointer-events-none select-none text-primary/50">
                <FloralDecor />
            </div>
            <div className="absolute -right-40 top-1/2 -rotate-130 -translate-y-1/2 w-82 h-82  pointer-events-none select-none text-primary/50">
                <FloralDecor />
            </div>
        </section>
    );
}
