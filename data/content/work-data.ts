import m3 from "@/assets/images/makeup/makeup-3.webp";
import n3 from "@/assets/images/nails/nails-3.webp";


export const phoneNumber = "9529198538";

export const services = [
    {
        id: "01",
        title: "Makeup Looks",
        description: "Exquisite makeup for your most precious moments. We create timeless looks tailored to your unique features and style.",
        image: m3,


        pricing: [
            { label: "Party / Haldi / Mehandi", price: [799] },
            { label: "Engagement / Reception", price: [1999, 3999] },
            { label: "Bridal", price: [7999, 9999] }
        ]
    },
    {
        id: "02",
        title: "Nail Extentions",
        description: "Miniature masterpieces crafted on your fingertips using premium techniques and high-end artisanal finishes.",

        image: n3,
        pricing: [
            { label: "Temporary Extentions", price: [999, 1299] },
            { label: "Gel Extentions", price: [1099, 1499] },
            { label: "Acrylic Extentions", price: [1499, 2199] }
        ]
    },

];