"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SunriseButton } from "./common/SunriseButton";
import { Star } from "./common/Star";
import { FloralDecor } from "./common/floral";
import { phoneNumber, services } from "@/data/content/work-data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  whileInView: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col w-full"
    >
      {/* Image Div with Vertical Ratio and 3D Animation */}
      <div className="relative perspective-1000">
        <motion.div
          initial={{ opacity: 0, y: 20, rotateZ: -2 }}
          whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full aspect-4/5 h-100 overflow-hidden rounded-2xl group ring-1 ring-background/80 "
        >
          <motion.div
            initial={{ scale: 1.3 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full h-full "
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className=" object-cover object-top
                        group-hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        </motion.div>

        {/* Overflowing Vector Decor */}

        <motion.div
          initial={{ rotate: 0, opacity: 0, y: 20, rotateZ: -2 }}
          whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
          whileHover={{ rotate: 90 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute -top-6 -right-6 w-12 h-12 text-background  z-20  cursor-pointer"
        >
          <Star className="w-full h-full" />
        </motion.div>
      </div>

      {/* Content Details */}
      <div className="pt-8 flex flex-col">
        {/* Hero-style drawing line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          className="h-px rounded-full  bg-background/80 mb-6"
        />

        <motion.div
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={index}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
            <div className="max-w-45">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-muted mb-1 block">
                0{service.id}
              </span>
              <h3 className="font-heading text-3xl font-bold text-background leading-[1.1] tracking-tight group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>
            </div>

            {/* Pricing Grid */}
            <div className="flex-1 w-full md:max-w-50 ">
              <div className="space-y-3">
                {service.pricing.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-end gap-2 group/item"
                  >
                    <span className="text-[11px] font-bold tracking-widest text-background/80 uppercase">
                      {item.label}
                    </span>
                    <div className="grow border-b border-dotted border-background mb-1 " />
                    <span className="font-heading text-base  font-bold text-background group-hover/item:text-secondary transition-colors duration-300">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sunrise Animation Button (Pill Shape) */}
          <div className="mt-2">
            <SunriseButton
              text="Book Now"
              className="px-8 py-3.5"
              bgColor="bg-surface-alt"
              hoverColor="bg-background"
              textColor="text-foreground"
              hoverTextColor="group-hover/btn:text-foreground"
              onClick={() =>
                window.open(`https://wa.me/91${phoneNumber}`, "_blank")
              }
              icon={<ArrowUpRight size={16} />}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative pt-32  pb-10 px-6 bg-foreground "
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="absolute -top-20 -rotate-110 -left-6 w-50 h-50 text-background  pointer-events-none z-20"
        >
          <FloralDecor className="w-full h-full" />
        </motion.div>

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-8">
          <motion.div
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-2xl"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-background mb-4 block">
              Our Expertise
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[0.95] uppercase">
              Curated{" "}
              <span className="italic font-light opacity-80 lowercase">
                Beauty
              </span>
              <br />
              Services.
            </h2>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="font-body text-surface-alt text-base sm:text-lg max-w-sm mb-2 font-light leading-relaxed"
          >
            Drawing inspiration from high fashion to create timeless artistic
            expressions.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="flex-1 h-px my-auto rounded-full bg-secondary hidden md:flex mb-20 "
        />

        {/* Vertical Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 ">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
