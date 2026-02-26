import m3 from "@/assets/images/makeup/makeup-3.webp";
import n3 from "@/assets/images/nails/nails-3.webp";


export const phoneNumber = "9529198538";

export const services = [
    {
        id: "01",
        title: "Bridal Artistry",
        description: "Exquisite makeup for your most precious moments. We create timeless looks tailored to your unique features and style.",
        image: m3,


        pricing: [
            { label: "Signature Bridal", price: "$299" },
            { label: "Elite Engagement", price: "$199" },
            { label: "Global Destination", price: "$599" }
        ]
    },
    {
        id: "02",
        title: "Boutique Nail Art",
        description: "Miniature masterpieces crafted on your fingertips using premium techniques and high-end artisanal finishes.",

        image: n3,
        pricing: [
            { label: "Gel Extension", price: "$89" },
            { label: "Hand-Painted Art", price: "$120" },
            { label: "Chrome Finish", price: "$75" }
        ]
    },

];