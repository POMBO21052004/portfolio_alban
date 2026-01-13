import Link from "next/link";
import { Github, Linkedin, Youtube, Twitter } from "lucide-react";

const socialLinks = [
    { icon: <Github />, path: "https://github.com" },
    { icon: <Linkedin />, path: "https://linkedin.com" },
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
