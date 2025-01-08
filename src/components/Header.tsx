"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import "../app/css/header.css";

gsap.registerPlugin(useGSAP);

export default function Header() {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const container = useRef(null);
    const { contextSafe } = useGSAP({ scope: container });

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

    const handleSidebarMenu = contextSafe(() => {
        gsap.to(".mobile-sidebar", {
            duration: 1.25,
            ease: "bounce.out",
            right: "0",
            display: "grid",
        });
    });

    const closeSidebarMenu = contextSafe(() => {
        gsap.to(".mobile-sidebar", {
            duration: 1,
            ease: "expo.out",
            right: "-70%",
            display: "none",
        });
    });

    return (
        <header className="header" ref={container}>
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
                            alt="Open Navigation Menu icon"
                        />
                    </figure>
                    <nav className={`mobile-sidebar`}>
                        <figure onClick={closeSidebarMenu}>
                            <Image
                                src="/assets/shared/icon-close.svg"
                                width={24}
                                height={21}
                                alt="Close Navigation Menu icon"
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
