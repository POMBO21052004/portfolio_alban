import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
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
                    <Link href="/contact">
                        <button className="bg-accent text-primary px-6 py-2 rounded-full font-medium hover:bg-accent-hover transition-all">
                            M'embaucher
                        </button>
                    </Link>
                </div>

                {/* Mobile Nav Placeholder */}
                <div className="xl:hidden text-accent">
                    {/* Placeholder for MobileNav */}
                    Menu
                </div>
            </div>
        </header>
    );
};

export default Header;
