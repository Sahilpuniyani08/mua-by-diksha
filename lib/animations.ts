import type { Variants, Transition } from "framer-motion";

// ─── Transitions ──────────────────────────────────────
export const springBounce: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
};

// ─── Viewport presets ─────────────────────────────────
export const vp = { once: true, margin: "-80px" as const };
export const vpClose = { once: true, margin: "-60px" as const };

// ─── Fade variants ────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export const fadeUpLarge: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── Scale ────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

// ─── Stagger ──────────────────────────────────────────
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Hero sequence ────────────────────────────────────
export const heroSequence = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] },
  },
});

// ─── Slide (testimonials) ─────────────────────────────
export const slideIn: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.35 } },
};


export const navEnter: Variants = {
  hidden: { y: 80, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
