"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FloralDecor } from "./common/floral";
import { filters, portfolioItems } from "@/data/content/portfolio-content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  whileInView: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

export default function PortfolioSection() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((i) => i.category === filter.toLowerCase());

  return (
    <section
      id="portfolio"
      className="relative pt-32 pb-10 px-6 bg-background "
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="absolute -top-20 -rotate-110 -left-6 w-50 h-50 text-primary pointer-events-none z-20"
        >
          <FloralDecor className="w-full h-full" />
        </motion.div>
        {/* Heading (Services Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-8">
          <motion.div
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-2xl"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-4 block">
              Visual Diary
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[0.95] uppercase">
              The{" "}
              <span className="italic font-light opacity-80 lowercase">
                Curation
              </span>
              <br />
              Gallery.
            </h2>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="font-body text-foreground  text-base sm:text-lg max-w-sm mb-2 font-light leading-relaxed"
          >
            A glimpse into our finest work — beauty crafted to perfection and
            high fashion.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="flex-1 h-px my-auto rounded-full bg-foreground/50 hidden md:flex mb-20 "
        />

        {/* Filters (Pill Style) */}
        <div className="flex items-center justify-center gap-3 mb-16">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-8 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 font-body relative overflow-hidden group/filter ${
                filter === f
                  ? "bg-surface-alt text-foreground  ring-1 ring-white"
                  : "bg-foreground text-black hover:text-primary "
              }`}
            >
              <span className="relative z-10">{f}</span>
              {filter !== f && (
                <div className="absolute inset-0 bg-primary opacity-0 group-hover/filter:opacity-10 transition-opacity" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20, rotateZ: -1 }}
                whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="relative flex flex-col group cursor-pointer"
                onClick={() => {
                  if (typeof item.src === "string") {
                    setLightbox(item.src);
                  } else {
                    setLightbox((item.src as any).src);
                  }
                }}
              >
                {/* Image Container with Integrated Overlays */}
                <div className="relative aspect-10/12 md:aspect-8/9 w-full overflow-hidden rounded-2xl ring-1 ring-foreground/80 group-hover:ring-primary transition-all duration-700 shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/10">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-800 group-hover:scale-105"
                  />

                  {/* Subtle Gradient Mask for Legibility */}
                  <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top Right Action Button */}
                  <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <motion.div
                      initial="initial"
                      whileHover="hover"
                      className="relative h-10 w-10 rounded-full overflow-hidden border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center group/btn"
                    >
                      <motion.div
                        variants={{
                          initial: { clipPath: "circle(0% at 50% 100%)" },
                          hover: { clipPath: "circle(150% at 50% 100%)" },
                        }}
                        className="absolute inset-0 bg-primary z-0"
                      />
                      <ArrowUpRight
                        size={16}
                        className="relative z-10 text-white group-hover/btn:text-black"
                      />
                    </motion.div>
                  </div>

                  {/* Bottom Right Title Pill */}
                  <div className="absolute bottom-4 left-4 ">
                    <div className="p-1 px-3 flex rounded-full border border-foreground/80 bg-white/10 backdrop-blur-sm">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/20 backdrop-blur-md flex items-center justify-center p-5 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              className="absolute top-8 right-8 w-12 h-12 bg-background rounded-full flex items-center justify-center text-white hover:bg-background/20 ring ring-foreground  transition-all z-110"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={() => setLightbox(null)}
            >
              <X size={20} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              src={lightbox}
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
