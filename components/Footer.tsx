"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SunriseButton } from "@/components/common/SunriseButton";
import { WaveMarquee } from "./common/WaveMarquee";
import { useRef } from "react";
import { socialLinks } from "@/data/content/footer-content";


export default function Footer() {

    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress of the component's container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });


    const xRaw = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const y = useTransform(scrollYProgress, [0, 1], [-700, 0]);

    // Apply a spring for smooth, physics-based movement
    const x = useSpring(xRaw, { stiffness: 50, damping: 20, restDelta: 0.001 });


    return (
        <footer ref={containerRef} className="relative bg-foreground overflow-hidden rounded-t-sm md:rounded-t-lg  pt-10"
        >

            <WaveMarquee
                text="LET'S CREATE ART"
                className="py-10 md:py-0"
                color="text-background"
                x={x}
            />

            <div className="rebg-foreground py-10 text-background px-6 sm:px-10 overflow-hidden ">
                <div


                    className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-10">
                        {/* Left Column - Brand & Vision */}
                        <div className="flex flex-col gap-8">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                className="flex flex-col gap-5"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                <div

                                    className="font-heading text-2xl md:text-2xl font-black 
                                    text-background tracking-normal "
                                >
                                    DIKSHA PUNYANI<span className="opacity-80 font-light italic ml-1">ARTISTRY</span>
                                </div>
                                <p className="font-body text-background/80 text-sm md:text-lg max-w-md leading-relaxed italic">
                                    &quot;Artist who curates to make the new energy through Makeup and Nails&quot;
                                </p>
                            </motion.div>

                            <div className="mt-4">
                                <SunriseButton
                                    text="Book Appointment"
                                    bgColor="bg-surface-alt"
                                    hoverColor="bg-background"
                                    textColor="text-foreground"
                                    hoverTextColor="group-hover/btn:text-foreground"
                                    onClick={() => window.open(`https://wa.me/919529198538`, '_blank')}
                                />
                            </div>
                        </div>

                        {/* Right Column - Navigation & Community */}
                        <div className="grid grid-cols-2 gap-12">
                            {/* Navigation */}
                            <div className="flex flex-col gap-6">
                                <h4 className="font-heading text-base md:text-sm font-black tracking-[0.3em] uppercase text-background">Explore</h4>
                                <ul className="flex flex-col gap-4">
                                    {["Services", "Portfolio", "About", "Reviews"].map((item) => {
                                
                                         const href = item === "Reviews" ? "testimonials" :item.toLowerCase() ;
                                       

                                        return (
                                        <li key={item}>
                                            <a href={`#${href}`} className="text-base md:text-sm font-body text-surface-alt/80 hover:text-background transition-colors">
                                                {item}
                                            </a>
                                        </li>
                                        ) 
})}
                                </ul>
                            </div>

                            {/* Community - Updated with Pills that link to apps/websites */}
                            <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
                                <h4 className="font-heading  text-base md:text-sm font-black tracking-[0.3em] uppercase text-background">Community</h4>
                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial="initial"
                                            whileHover="hover"
                                            className="relative w-12 h-12 flex items-center justify-center rounded-full ring ring-background/80 hover:ring-background/10  overflow-hidden group/btn transition-colors"
                                        >
                                            <motion.div
                                                variants={{
                                                    initial: { clipPath: 'circle(0% at 50% 100%)' },
                                                    hover: { clipPath: 'circle(150% at 50% 100%)' }
                                                }}
                                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                                className="absolute inset-0 bg-background z-0"
                                            />
                                            <social.icon size={18} className="relative z-10 text-background group-hover/btn:text-foreground transition-colors duration-500" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="pt-4 flex items-center gap-6">
                        <div className="h-px bg-background w-full  hidden md:flex" />
                        <p className="text-[10px] uppercase tracking-widest text-background/80 font-bold whitespace-nowrap">
                            © 2026 DIKSHA PUNYANI. ALL RIGHTS RESERVED.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
