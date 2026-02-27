"use client";

import { Link, usePathname, useRouter, routing } from "@/i18n/routing";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useTranslations, useLocale } from "next-intl";

const LocaleSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const nextLocale = locale === "en" ? "fr" : "en";
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <button
            onClick={toggleLocale}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-accent text-accent font-bold hover:bg-accent hover:text-primary transition-all duration-300 uppercase text-xs"
        >
            {locale === "en" ? "fr" : "en"}
        </button>
    );
};

const Header = () => {
    const t = useTranslations("Header");

    return (
        <header className="py-4 xl:py-6 text-white bg-primary fixed top-0 w-full z-50 transition-all"> {/* Fixed Header */}
            <div className="container mx-auto flex justify-between items-center px-4 xl:px-0">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Alban<span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* Desktop Nav & Hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <LocaleSwitcher />
                    <Link href="/contact">
                        <button className="bg-accent text-primary px-6 py-2 rounded-full font-medium hover:bg-accent-hover transition-all">
                            {t("hireMe")}
                        </button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden flex items-center gap-4">
                    <LocaleSwitcher />
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

export default Header;
