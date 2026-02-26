"use client";

import { motion } from "framer-motion";
import { Phone, ArrowUpRight, Instagram, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import { SunriseButton } from "./common/SunriseButton";
import { RectSVG } from "./common/rect";
import { FloralDecor } from "./common/floral";
import Image from "next/image";

import modelImg from "../public/model-image-1.png";
import { phoneNumber } from "@/data/content/work-data";




export default function HeroSection() {
   

    return (
        <section id="hero" className="relative flex flex-col items-center bg-background p-6 md:px-10 md:pt-4  pb-32 overflow-hidden">
            <RectSVG />
            {/* Top Navigation Bar */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full flex flex-col md:flex-row justify-between gap-4 z-50">
                <div

                    className="font-heading text-lg md:text-lg font-black tracking-tighter text-foreground"
                >
                    DIKSHA PUNYANI<span className="opacity-80 font-light italic ml-1">ARTISTRY</span>
                </div>
                <div className="flex-1 h-px my-auto rounded-full bg-foreground/50 hidden md:flex " />

                <Link
                    href="mailto:dikshabeauty@gmail.com"
                    className="text-[10px] font-body font-bold tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors"
                >
                    dikshapunyani0001@gmail.com
                </Link>

            </motion.div>

            {/* Background Floral SVGs */}
            <div className="absolute inset-0 pointer-events-none ">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-5%] w-150 h-150 text-primary/30 md:text-foreground"
                >
                    <FloralDecor className="w-full h-full" />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 gap-10  lg:grid-cols-12 relative z-10 mt-5  ">
                {/* Left Content */}
                <div className="lg:col-span-6 flex flex-col  md:pt-10  ">
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-heading text-5xl sm:text-7xl md:text-[60px] lg:text-[70px] font-bold leading-[0.95] text-foreground mb-4 tracking-tighter uppercase"
                    >
                        MAKEUP & <br />
                        <span className="italic font-light opacity-80 lowercase">Nails</span> <br />
                        BY DIKSHA.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '100%' }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="w-full h-px rounded-full bg-foreground/50 mb-6" />

                    {/* for mobile */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="aspect-9/7 mb-8 w-full  relative  group bg-white/5 flex md:hidden "
                    >
                        <Image
                            src={modelImg}
                            alt="Diksha Beauty Artist Portrait"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 rounded-2xl"
                        />

                        {/* Circular Text Badge - Refined with Lavender Dot */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-12 -right-4 w-30 h-30 block md:hidden"
                        >
                            <div className="w-full h-full rounded-full bg-foreground shadow-2xl flex items-center justify-center relative">
                                <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                                    <path id="badgePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                    <text className="fill-background text-[7.5px] font-black uppercase tracking-widest leading-none">
                                        <textPath href="#badgePath">
                                            • Professional Beauty Artistry • Diksha Artistry • Professional
                                        </textPath>
                                    </text>
                                </svg>
                                <div className="w-4 h-4 rounded-full bg-background shadow-[0_0_15px_rgba(213,155,255,0.6)]" />

                            </div>
                        </motion.div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex items-center gap-10 mb-10 md:mb-5">
                        <SunriseButton
                            text="Book Appointment"
                            bgColor="bg-accent"
                            hoverColor="bg-foreground"
                            textColor="text-surface-alt"
                            hoverTextColor="group-hover/btn:text-secondary"
                            onClick={() => window.open(`https://wa.me/91${phoneNumber}`, '_blank')}
                        />
                    </motion.div>


                    {/* Bottom Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="bg-surface-alt p-4 rounded-xl  inset-shadow-2xs inset-shadow-black/10 max-w-xl  "
                        style={{ clipPath: "url(#myInnerRoundedPath)" }}
                    >

                        <div className="flex flex-col sm:flex-row gap-5 items-start  ">

                            <div className="w-28 h-28 rounded-[10px] overflow-hidden shrink-0  ">
                                <img
                                    src="/model-image-2.png"
                                    alt="Nail Art Detail"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-between h-full py-1">
                                <p className="font-body text-[13px] text-foreground leading-relaxed mb-6 font-medium">
                                    Meet Diksha, a artistry expert dedicated to celebrating your beauty.
                                    Specializing in flawless makeup and bespoke nail designs for every precious moment.
                                </p>
                                <div className="flex flex-wrap gap-x-6 gap-y-2">


                                    {[
                                        { label: 'Instagram', href: 'https://instagram.com/', hoverClass: 'hover:text-foreground hover:border-foreground' },
                                        { label: 'WhatsApp', href: `https://wa.me/91${phoneNumber}`, hoverClass: 'hover:text-foreground hover:border-foreground' },
                                    ].map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`font-heading text-[9px] font-black tracking-[0.25em] uppercase border border-foreground/10 px-4 py-2 rounded-full transition-all duration-300 ${item.hoverClass}`}
                                        >
                                            {item.label}
                                        </a>
                                    ))}


                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>

                {/* Right Content - Large Portrait Image */}
                <div className="lg:col-span-6 hidden md:flex justify-center lg:justify-end  ">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="float-right  aspect-9/10 w-full max-w-112.5  relative group  "
                    >
                        <img
                            src="/model-image-1.png"
                            alt="Diksha Beauty Artist Portrait"
                            className="w-full h-full object-cover rounded-2xl"
                        />

                        {/* Circular Text Badge - Refined with Lavender Dot */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-32 -left-12 w-30 h-30 hidden md:block"
                        >
                            <div className="w-full h-full rounded-full bg-foreground shadow-2xl flex items-center justify-center relative">
                                <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                                    <path id="badgePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                    <text className="fill-background text-[7.5px] font-black uppercase tracking-widest leading-none">
                                        <textPath href="#badgePath">
                                            • Professional Beauty Artistry • Diksha Artistry • Professional
                                        </textPath>
                                    </text>
                                </svg>
                                <div className="w-4 h-4 rounded-full bg-background shadow-[0_0_15px_rgba(213,155,255,0.6)]" />

                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
