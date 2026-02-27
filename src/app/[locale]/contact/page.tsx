"use client";

import { useState } from "react";
import ContactInfoPopup from "@/components/ContactInfoPopup";

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
import { useTranslations } from "next-intl";

const Contact = () => {
    const t = useTranslations("Contact");

    const info = [
        {
            icon: <FaPhoneAlt />,
            title: t("info.phone"),
            description: "(+237) 681 20 25 20",
            href: "tel:+237681202520",
        },
        {
            icon: <FaEnvelope />,
            title: t("info.email"),
            description: "albanpombombe@gmail.com",
            href: "mailto:albanpombombe@gmail.com",
        },
        {
            icon: <FaMapMarkerAlt />,
            title: t("info.address"),
            description: t("info.addressValue"),
            href: null,
        },
    ];

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            if (selectedFile.size > 2 * 1024 * 1024) { // 2MB limit
                alert(t("form.fileTooLarge"));
                e.target.value = ""; // Reset input
                setFile(null);
            } else {
                setFile(selectedFile);
            }
        }
    };

    const handleSelectChange = (value: string) => {
        setFormData((prev: any) => ({ ...prev, service: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        const data = new FormData();
        data.append("firstname", formData.firstname);
        data.append("lastname", formData.lastname);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("service", formData.service);
        data.append("message", formData.message);
        if (file) {
            data.append("file", file);
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: data,
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
                setFile(null);
                const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
                if (fileInput) fileInput.value = "";
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
                            <h3 className="text-4xl text-accent">{t("title")}</h3>
                            <p className="text-white/60">
                                {t("description")}
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="text" name="firstname" placeholder={t("form.firstname")} value={formData.firstname} onChange={handleChange} required />
                                <Input type="text" name="lastname" placeholder={t("form.lastname")} value={formData.lastname} onChange={handleChange} required />
                                <Input type="email" name="email" placeholder={t("form.email")} value={formData.email} onChange={handleChange} required />
                                <Input type="tel" name="phone" placeholder={t("form.phone")} value={formData.phone} onChange={handleChange} />
                            </div>
                            {/* select */}
                            <Select onValueChange={handleSelectChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder={t("form.service")} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>{t("form.service")}</SelectLabel>
                                        <SelectItem value="Développement Front-End">{t("services.frontend")}</SelectItem>
                                        <SelectItem value="Développement Back-End">{t("services.backend")}</SelectItem>
                                        <SelectItem value="Développement Full Stack">{t("services.fullstack")}</SelectItem>
                                        <SelectItem value="Développement Mobile (Android/IOS)">{t("services.mobile")}</SelectItem>
                                        <SelectItem value="Design UI/UX">{t("services.design")}</SelectItem>
                                        <SelectItem value="Analyse Technique & Audit">{t("services.analysis")}</SelectItem>
                                        <SelectItem value="Optimisation IA">{t("services.ai")}</SelectItem>
                                        <SelectItem value="Autre">{t("services.other")}</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea
                                className="h-[200px]"
                                placeholder={t("form.message")}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            {/* file upload - optional */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="file" className="text-white/60 text-sm ml-1">{t("form.file")}</label>
                                <Input
                                    id="file"
                                    type="file"
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                    className="cursor-pointer file:cursor-pointer file:text-white/80 file:bg-accent/10 file:border-0 file:rounded-md file:mr-4 file:px-4 file:py-2 hover:file:bg-accent/20 transition-all"
                                />
                            </div>
                            {/* btn */}
                            <Button size="md" className="max-w-40" disabled={status === "loading"}>
                                {status === "loading" ? t("form.sending") : t("form.send")}
                            </Button>
                            {status === "success" && (
                                <p className="text-accent mt-2">{t("form.success")}</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-500 mt-2">{t("form.error")}</p>
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
            <ContactInfoPopup />
        </motion.section>
    );
};

export default Contact;
