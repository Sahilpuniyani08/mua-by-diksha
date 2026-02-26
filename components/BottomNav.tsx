"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Sparkles, Images, User, MessageCircle } from "lucide-react";

const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "services", label: "Services", icon: Sparkles },
    { id: "portfolio", label: "Work", icon: Images },
    { id: "about", label: "About", icon: User },
    { id: "contact", label: "Contact", icon: MessageCircle },
];

export default function BottomNav() {
    const [active, setActive] = useState("hero");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-25% 0px -25% 0px", // Increased target area for better detection
            threshold: 0.1,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            setActive(id);
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4"
        >
            <div className="glass  flex items-center gap-1 p-2 rounded-full shadow-2xl shadow-black/5">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.id;
                    return (
                        <button
                            key={item.id}
                            disabled={isActive}
                            onClick={() => scrollTo(item.id)}
                            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-500 cursor-pointer ${isActive ? "text-white" : "text-muted hover:text-foreground"
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-nav-pill"
                                    className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/20"
                                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                />
                            )}
                            <Icon size={16} className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-white' : ''}`} />
                            <AnimatePresence>
                                {isActive && (
                                    <motion.span
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: "auto", opacity: 1 }}
                                        exit={{ width: 0, opacity: 0 }}
                                        className="relative z-10 text-[11px] font-semibold tracking-wider uppercase overflow-hidden whitespace-nowrap"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    );
                })}
            </div>
        </motion.nav>
    );
}
