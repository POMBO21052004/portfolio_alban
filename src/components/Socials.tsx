import Link from "next/link";
import { Github, Linkedin, Youtube, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const socialLinks = [
    { icon: <FaWhatsapp />, path: "https://wa.me/237681202520" },
    { icon: <Github />, path: "https://github.com/POMBO21052004" },
    { icon: <Linkedin />, path: "https://www.linkedin.com/in/alban-pombo-mbe-2299743a5" },
    { icon: <Youtube />, path: "https://youtube.com" },
    { icon: <Twitter />, path: "https://twitter.com" },
];

const Socials = ({ containerStyles, iconStyles }: { containerStyles?: string, iconStyles?: string }) => {
    return (
        <div className={containerStyles}>
            {socialLinks.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;
