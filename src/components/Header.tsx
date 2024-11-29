"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 450) {
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
        <header>
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
                        <li>
                            <Link href="/">00 Home</Link>
                        </li>
                        <li>
                            <Link href="/destination">01 Destination</Link>
                        </li>
                        <li>
                            <Link href="/crew">02 Crew</Link>
                        </li>
                        <li>
                            <Link href="/technology">03 Technology</Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
