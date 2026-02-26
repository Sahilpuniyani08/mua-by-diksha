"use client";

import { motion } from "framer-motion";
import { fadeUp, vp, vpClose } from "@/lib/animations";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Star } from "./common/Star";
import { FloralDecor } from "./common/floral";
import { SunriseButton } from "./common/SunriseButton";
import modelImage from "@/assets/images/makeup/artist.webp";


export default function AboutSection() {
    return (
        <section id="about" className="relative bg-foreground overflow-hidden pt-20  md:pt-32 pb-10 ">


            <div className=" gap-10 md:gap-20 px-5 md:px-20 mx-auto flex flex-col-reverse md:flex-row ">
                {/* Left Content Area */}
                <div className="flex-1 md:flex-4 flex flex-col justify-center relative z-10">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={vp}
                        className="relative"
                    >

                        {/* Artist Badge */}
                        <div className="absolute top-0 -left-6 z-20">
                            <motion.div
                                initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
                                whileInView={{ opacity: 1, rotate: -12, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="inline-block px-5 py-1.5 border-2 border-background text-background font-black text-[10px] tracking-[0.2em] uppercase rounded-xl bg-white/10 backdrop-blur-sm  shadow-2xl shadow-primary/10"
                            >
                                Artist
                            </motion.div>
                        </div>

                        {/* Name Heading - Massive and Bold */}
                        <h2 className="font-heading text-7xl sm:text-7xl md:text-[100px] font-black leading-[0.8] text-surface-alt tracking-tighter uppercase">
                            <span className="text-background">
                                Diksha
                            </span>  <br />
                            Punyani
                        </h2>

                        {/* Separator line like Services section */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                            className="h-px bg-surface-alt/80 mt-5 mb-14 rounded-full"
                        />

                        <motion.div
                            initial={{ opacity: 0, rotate: 360 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -left-40 bottom-8 w-80 h-80 text-background z-0"
                        >
                            <FloralDecor className="w-full h-full" />
                        </motion.div>

                        {/* Description Text */}
                        <div className="max-w-md space-y-8 mb-12 float-end">
                            <p className="font-body text-surfase-alt text-sm md:text-base leading-relaxed max-w-sm font-semibold ">
                                I&apos;m a passionate nail artist and makeup artist experience transforming beauty into art.
                                My journey began with a deep love for colors, textures, and the confidence a perfect look can bring.
                                Whether it&apos;s a bridal look that captures every eye or a creative nail design — I pour my heart into every experience.
                            </p>
                        </div>

                        {/* Sunrise Button like Services */}
                        <SunriseButton
                            text="Book Appointment"
                            bgColor="bg-surface-alt"
                            hoverColor="bg-background"
                            textColor="text-foreground"
                            hoverTextColor="group-hover/btn:text-foreground"
                            onClick={() => window.open(`https://wa.me/919529198538`, '_blank')}
                        />

                        {/* Decorative Star */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute -right-10 top-0 text-background opacity-20 hidden lg:block"
                        >
                            <Star size={120} />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Image Area */}
                <div className="md:flex-3 w-full md:w-1/2 relative  md:h-auto min-h-[400px] h-[400px] md:min-h-auto  ">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full h-full p-1 z-10 border-2 border-background rounded-3xl"
                    >
                        <div className="relative w-full h-full rounded-[20px] overflow-hidden ">
                            <Image
                                src={modelImage}
                                alt="Diksha Punyani — Makeup Artist Portrait"
                                fill
                                className="object-cover transition-transform duration-1000 hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                        </div>

                        <motion.div
                            initial={{ rotate: 0, opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 1.5 }}
                            className="absolute -top-8 -right-10 w-20 h-20 text-background z-20 cursor-pointer drop-shadow-lg"
                        >
                            <Star className="w-full h-full" />
                        </motion.div>


                    </motion.div>
                </div>

            </div>

        </section >
    );
}
