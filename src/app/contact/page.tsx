"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Téléphone",
        description: "(+237) 681 20 25 20",
        href: "tel:+237681202520",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "albanpombombe@gmail.com",
        href: "mailto:albanpombombe@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Adresse",
        description: "Douala Cameroun, PK 14, Mont Sinai",
        href: null,
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData((prev: any) => ({ ...prev, service: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
                            <p className="text-white/60">
                                Intéressé par une collaboration ou vous avez une question ? Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder="Prénom" value={formData.firstname} onChange={handleChange} required />
                                <Input type="text" name="lastname" placeholder="Nom" value={formData.lastname} onChange={handleChange} required />
                                <Input type="email" name="email" placeholder="Adresse Email" value={formData.email} onChange={handleChange} required />
                                <Input type="tel" name="phone" placeholder="Numéro de téléphone" value={formData.phone} onChange={handleChange} />
                            </div>
                            {/* select */}
                            <Select onValueChange={handleSelectChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Sélectionnez un service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Sélectionnez un service</SelectLabel>
                                        <SelectItem value="Développement Front-End">Développement Front-End</SelectItem>
                                        <SelectItem value="Développement Back-End">Développement Back-End</SelectItem>
                                        <SelectItem value="Développement Full Stack">Développement Full Stack</SelectItem>
                                        <SelectItem value="Développement Mobile (Android/IOS)">Développement Mobile (Android/IOS)</SelectItem>
                                        <SelectItem value="Design UI/UX">Design UI/UX</SelectItem>
                                        <SelectItem value="Analyse Technique & Audit">Analyse Technique & Audit</SelectItem>
                                        <SelectItem value="Optimisation IA">Optimisation IA</SelectItem>
                                        <SelectItem value="Autre">Autre</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Tapez votre message ici."
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            {/* btn */}
                            <Button size="md" className="max-w-40" disabled={status === "loading"}>
                                {status === "loading" ? "Envoi..." : "Envoyer"}
                            </Button>
                            {status === "success" && (
                                <p className="text-accent mt-2">Votre message a été envoyé avec succès !</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-500 mt-2">Une erreur s'est produite. Veuillez réessayer.</p>
                            )}
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-xl hover:text-accent transition-all duration-300">
                                                    {item.description}
                                                </a>
                                            ) : (
                                                <h3 className="text-xl">{item.description}</h3>
                                            )}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
