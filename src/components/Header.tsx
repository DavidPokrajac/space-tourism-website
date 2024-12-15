"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "../app/css/header.css";

export default function Header() {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 676) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isMobile]);

    function handleSidebarMenu() {
        setIsHamburgerClicked(true);
    }

    return (
        <header className="header">
            <figure>
                <Image
                    src="/assets/shared/logo.svg"
                    width={40}
                    height={40}
                    alt="A Company logo"
                />
            </figure>
            {isMobile ? (
                <>
                    <figure onClick={handleSidebarMenu}>
                        <Image
                            src="/assets/shared/icon-hamburger.svg"
                            width={24}
                            height={21}
                            alt=""
                        />
                    </figure>
                    <nav
                        className={`mobile-sidebar ${
                            isHamburgerClicked === false
                                ? "mobile-sidebar-hidden"
                                : ""
                        }`}
                    >
                        <figure>
                            <Image
                                src="/assets/shared/icon-close.svg"
                                width={24}
                                height={21}
                                alt=""
                            />
                        </figure>
                        <ul>
                            <li className="home">
                                <Link
                                    className={`${
                                        pathname === "/"
                                            ? "active-menu-item"
                                            : ""
                                    }`}
                                    href="/"
                                >
                                    <strong>00</strong> Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${
                                        pathname === "/destination"
                                            ? "active-menu-item"
                                            : ""
                                    }`}
                                    href="/destination"
                                >
                                    <strong>01</strong> Destination
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${
                                        pathname === "/crew"
                                            ? "active-menu-item"
                                            : ""
                                    }`}
                                    href="/crew"
                                >
                                    <strong>02</strong> Crew
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${
                                        pathname === "/technology"
                                            ? "active-menu-item"
                                            : ""
                                    }`}
                                    href="/technology"
                                >
                                    <strong>03</strong> Technology
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </>
            ) : (
                <nav>
                    <ul>
                        <li className="home">
                            <Link
                                className={`${
                                    pathname === "/" ? "active-menu-item" : ""
                                }`}
                                href="/"
                            >
                                <strong>00</strong> Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${
                                    pathname === "/destination"
                                        ? "active-menu-item"
                                        : ""
                                }`}
                                href="/destination"
                            >
                                <strong>01</strong> Destination
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${
                                    pathname === "/crew"
                                        ? "active-menu-item"
                                        : ""
                                }`}
                                href="/crew"
                            >
                                <strong>02</strong> Crew
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`${
                                    pathname === "/technology"
                                        ? "active-menu-item"
                                        : ""
                                }`}
                                href="/technology"
                            >
                                <strong>03</strong> Technology
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
