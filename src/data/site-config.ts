export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Dong Hyeon Kim',
    subtitle: 'Passionate IT PMO Since 2016',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Certification',
            href: '/certification'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Activities',
            href: '/activities'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        // "About" link removed from here
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    hero: {
        title: 'Hello World!',
        text: "**Dong Hyeon Kim**, is an aspiring IT PMO and a dedicated generalist with a passion for understanding and managing diverse IT ecosystems within projects. With a background in Computer Engineering from Catholic University of Korea and international experience from the University of Skövde, Sweden, Dong hyeon combines technical expertise with strong project management skills. His work includes developing innovative solutions in web and AI technologies, as well as leading successful projects like Duett, a music taste-based platform. Dong hyeon is committed to creating user-centric services, fostering growth, and contributing to a happier society.",
        image: {
            src: '/dhkim.webp',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
