"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 676) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isMobile]);

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
                <figure>
                    <Image
                        src="/assets/shared/icon-hamburger.svg"
                        width={24}
                        height={21}
                        alt=""
                    />
                </figure>
            ) : (
                <nav>
                    <ul>
                        <li className="home">
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/destination">
                                <strong>01</strong> Destination
                            </Link>
                        </li>
                        <li>
                            <Link href="/crew">
                                <strong>02</strong> Crew
                            </Link>
                        </li>
                        <li>
                            <Link href="/technology">
                                <strong>03</strong> Technology
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
