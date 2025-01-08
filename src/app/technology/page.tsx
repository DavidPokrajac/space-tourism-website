"use client";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { v4 as uuidv4 } from "uuid";
import "../css/technology.css";
import { usePathname } from "next/navigation";
import { backgroundImageSource } from "../utilities";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TechnologyMenu from "./components/TechnologyMenu";

export interface TechnologyInfoProps {
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
}

gsap.registerPlugin(useGSAP);

export default function Technology() {
    const [technology, setTechnology] = useState<string>("Launch vehicle");
    const [technologyInfo, setTechnologyInfo] = useState<TechnologyInfoProps[]>(
        []
    );
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    const pathname = usePathname();

    function handleTechnology(technology: string) {
        setTechnology(technology);
    }

    useGSAP(() => {
        if (window.innerWidth >= 676) {
            gsap.fromTo(
                ".technology-img",
                { opacity: 0, left: "-100vw" },
                { opacity: 1, left: 0, duration: 1 }
            );
            gsap.to(".technology-img", {
                rotation: 360,
                duration: 1,
                stagger: 0.2,
            });
        }
    }, [handleTechnology]);

    useEffect(() => {
        function handleBgImage() {
            backgroundImageSource(pathname.slice(1), document.body.clientWidth);
        }

        window.addEventListener("resize", handleBgImage);
        handleBgImage();

        return () => {
            window.removeEventListener("resize", handleBgImage);
        };
    });

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1092) {
                setIsDesktop(true);
            } else if (window.innerWidth <= 1092) {
                setIsDesktop(false);
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isDesktop]);

    useEffect(() => {
        async function fetchDestination() {
            const file = await import("../../lib/data.json");

            const selectedDestination = file.default.technology.filter(
                (d) => d.name === technology
            );
            setTechnologyInfo(selectedDestination);
        }
        fetchDestination();
    }, [technology]);
    return (
        <>
            <Header />
            <div className="technology-container">
                <p className="introduction">
                    <span>03</span> Space launch 101
                </p>
                <TechnologyMenu
                    technology={technology}
                    handleTechnology={handleTechnology}
                />
                {technologyInfo.map((technology) => {
                    return (
                        <Fragment key={uuidv4()}>
                            <div className="technology-details">
                                <div>
                                    <span>The terminology...</span>
                                    <h2>{technology.name}</h2>
                                </div>
                                <p>{technology.description}</p>
                            </div>
                            <div className="technology-img">
                                <Image
                                    src={
                                        isDesktop
                                            ? technology.images.portrait
                                            : technology.images.landscape
                                    }
                                    width={isDesktop ? 515 : 768}
                                    height={isDesktop ? 527 : 310}
                                    alt=""
                                />
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        </>
    );
}
