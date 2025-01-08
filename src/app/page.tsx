"use client";
import { useEffect } from "react";

import Header from "@/components/Header";
import "./css/header.css";
import "./css/home.css";
import { usePathname } from "next/navigation";
import { backgroundImageSource } from "./utilities";

export default function Home() {
    const pathname = usePathname();

    useEffect(() => {
        function handleBgImage() {
            backgroundImageSource(
                pathname.slice(1) + "home",
                document.body.clientWidth
            );
        }

        window.addEventListener("resize", handleBgImage);
        handleBgImage();

        return () => {
            window.removeEventListener("resize", handleBgImage);
        };
    });

    return (
        <>
            <Header />
            <main className="main">
                <section className="main-content">
                    <div className="text-content">
                        <p className="introduction">
                            So, you want to travel to{" "}
                        </p>
                        <strong className="space-strong">Space</strong>
                        <p className="description">
                            Let’s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world
                            experience!
                        </p>
                    </div>
                    <button type="button" className="btn-primary">
                        Explore
                    </button>
                </section>
            </main>
        </>
    );
}
