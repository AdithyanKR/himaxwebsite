export const siteConfig = {
    brand: {
        name: "HI MAX Landscape",
        logo: {
            main: "hi max logo.png", // Used in Navbar
            footer: "hi max logo.png", // Used in Footer
        }
    },
    about: {
        title: "About HI MAX Landscape",
        description1: "We transform exterior spaces into breathtaking, premium sanctuaries. With an uncompromising eye for detail, our expert team designs, executes, and maintains luxury landscapes across Dubai and Abu Dhabi.",
        description2: "Whether it's a sophisticated modern villa layout, exclusive event greenery, or meticulous garden care, HI MAX LANDSCAPE brings lush, vibrant life to your environment.",
        image: "/about img.webp",
        buttonText: "Discover More",
    },
    services: {
        title: "Our Services",
        subtitle: "Elevating environments through unparalleled expertise, creative vision, and meticulous care.",
        list: [
            {
                title: "Landscape Design & Execution",
                description: "Comprehensive end-to-end design and installation of luxury outdoor spaces, tailored to your aesthetic.",
                icon: "🌿"
            },
            {
                title: "Premium Plant Sales",
                description: "Curated selection of exotic and premium flora, sourced globally to elevate your environment.",
                icon: "🪴"
            },
            {
                title: "Event Greenery & Rentals",
                description: "Transform any venue with lush, temporary botanical installations and plant rentals for VIP events.",
                icon: "🎪"
            },
            {
                title: "Garden Maintenance",
                description: "Expert horticulture care, pruning, and health management to ensure your landscape thrives year-round.",
                icon: "✂️"
            }
        ]
    },
    projects: {
        title: "Our Projects",
        list: [
            {
                id: 1,
                title: "",
                tag: "",
                image: "/1.JPG"
            },
            {
                id: 2,
                title: "",
                tag: "",
                image: "/7.jpg"
            },
            {
                id: 3,
                title: "",
                tag: " ",
                image: "/3.JPG"
            },
            {
                id: 4,
                title: "",
                tag: "",
                image: "/4.JPG"
            },
            {
                id: 5,
                title: "",
                tag: "",
                image: "/5.JPG"
            },
        ]
    },
    partners: {
        title: "Trusted By Premier Developers & Estates",
        logos: [
            "/logo 1.jpeg",
            "/logo 2.jpg",
            "/logo 3.png",
            "/logo 5.jpg",
            "/logo 6.jpg",
            // "/logo 1.jpeg", // duplicating a few to keep the loop populated or just keep the unique ones
            "/logo 2.jpg",
            "/logo 3.png"
        ]
    },
    testimonials: {
        title: "Client Experiences",
        subtitle: "Uncompromising quality, every time.",
        reviews: [
            {
                id: 1,
                client: "LuLu Group",
                role: "Retail Operations Manager",
                text: "HI MAX LANDSCAPE completely revolutionized our outdoor living space. The attention to detail in the flora selection and the dramatic lighting completely exceeded our expectations.",
                avatar: "SA"
            },
            {
                id: 2,
                client: "Line Investments & Property",
                role: "Facilities Director",
                text: "The sheer professionalism and artistic vision brought by the team is unmatched. Our maintenance is handled flawlessly, keeping the greenery lush and vibrant year-round.",
                avatar: "TZ"
            },
            {
                id: 3,
                client: "Burjeel Holdings",
                role: "Director of Operations",
                text: "We needed an over-the-top botanical installation for a VIP gala. They delivered a breathtaking display that left our guests speechless. Absolutely the best in the UAE.",
                avatar: "ER"
            }
        ]
    },
    contact: {
        // dubai: {
        //     title: "Dubai Office",
        //     address1: "Level 42, Emirates Towers",
        //     address2: "Sheikh Zayed Road, Dubai, UAE",
        //     phone: "+971 50 123 4567",
        //     email: "dubai@himaxlandscape.ae"
        // },
        abuDhabi: {
            title: "Abu Dhabi Office",
            address1: "Al Doum street ,",
            address2: "al mina irani market flower shop no 51",
            phone: "+971 55 161 9241",
            email: "himaxlandscape51@gmail.com"
        },
        hours: [
            { day: "Mon - Fri", time: "9:00 AM - 6:00 PM" },
            { day: "Saturday", time: "10:00 AM - 2:00 PM" },
            { day: "Sunday", time: "Closed" }
        ]
    }
};
