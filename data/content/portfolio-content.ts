// Import Makeup Images
import m1 from "@/assets/images/makeup/makeup-1.webp";
import m2 from "@/assets/images/makeup/makeup-2.webp";
import m3 from "@/assets/images/makeup/makeup-3.webp";
import m4 from "@/assets/images/makeup/makeup-4.webp";
import m5 from "@/assets/images/makeup/makeup-5.webp";
import m6 from "@/assets/images/makeup/makeup-6.webp";
import m7 from "@/assets/images/makeup/makeup-7.webp";
import m8 from "@/assets/images/makeup/makeup-8.webp";

// Import Nails Images
import n1 from "@/assets/images/nails/nails-1.webp";
import n2 from "@/assets/images/nails/nails-2.webp";
import n3 from "@/assets/images/nails/nails-3.webp";
import n4 from "@/assets/images/nails/nails-4.webp";
import n5 from "@/assets/images/nails/nails-5.webp";


export const portfolioItems = [
    // Makeup Items
    { id: 1, src: m1, alt: "Bridal Makeup", category: "makeup", title: "Royal Radiance", metadata: [{ label: "Look", val: "Bridal" }, { label: "Finish", val: "Traditional" }] },
    { id: 2, src: m2, alt: "Editorial Makeup", category: "makeup", title: "Vogue Vision", metadata: [{ label: "Look", val: "Editorial" }, { label: "Focus", val: "High-Fashion" }] },
    { id: 3, src: m3, alt: "Natural Makeup", category: "makeup", title: "Pure Glow", metadata: [{ label: "Look", val: "No-Makeup" }, { label: "Skin", val: "Dewy" }] },
    { id: 4, src: m4, alt: "Evening Glam", category: "makeup", title: "Midnight Charm", metadata: [{ label: "Style", val: "Smokey" }, { label: "Occasion", val: "Evening" }] },
    { id: 5, src: m5, alt: "Bold Artistry", category: "makeup", title: "Crimson Muse", metadata: [{ label: "Art", val: "Custom" }, { label: "Tone", val: "Vibrant" }] },
    { id: 6, src: m6, alt: "Wedding Look", category: "makeup", title: "Eternal Beauty", metadata: [{ label: "Look", val: "Wedding" }, { label: "Service", val: "Airbrush" }] },
    { id: 7, src: m7, alt: "Modern Glam", category: "makeup", title: "Urban Flare", metadata: [{ label: "Style", val: "Street" }, { label: "Effect", val: "Matte" }] },
    { id: 8, src: m8, alt: "Soft Glam", category: "makeup", title: "Pastel Petals", metadata: [{ label: "Look", val: "Minimalist" }, { label: "Vibe", val: "Soft" }] },

    // Nails Items
    { id: 9, src: n1, alt: "Marble Nail Art", category: "nails", title: "Quartz Essence", metadata: [{ label: "Art", val: "Marble" }, { label: "Finish", val: "Glossy" }] },
    { id: 10, src: n2, alt: "Chrome Nails", category: "nails", title: "Metallic Mirror", metadata: [{ label: "Art", val: "Chrome" }, { label: "Finish", val: "Mirror" }] },
    { id: 11, src: n3, alt: "Floral Nail Design", category: "nails", title: "Botanic Bloom", metadata: [{ label: "Art", val: "Freehand" }, { label: "Style", val: "Floral" }] },
    { id: 12, src: n4, alt: "Luxury Nail Extensions", category: "nails", title: "Diamond Dust", metadata: [{ label: "Art", val: "Encapsulated" }, { label: "Length", val: "Long" }] },
    { id: 13, src: n5, alt: "Minimalist Nails", category: "nails", title: "Blush Minimal", metadata: [{ label: "Art", val: "French" }, { label: "Vibe", val: "Classy" }] },
];


export const filters = ["All", "Nails", "Makeup"];