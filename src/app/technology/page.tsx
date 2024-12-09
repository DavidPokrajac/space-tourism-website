"use client";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { v4 as uuidv4 } from "uuid";
import "../css/technology.css";

export interface TechnologyInfoProps {
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
}

export default function Technology() {
    const [technology, setTechnology] = useState<string>("Launch vehicle");
    const [technologyInfo, setTechnologyInfo] = useState<TechnologyInfoProps[]>(
        []
    );
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 1092) {
                setIsDesktop(true);
            } else if (window.innerWidth <= 1092) {
                setIsDesktop(false);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isDesktop]);

    useEffect(() => {
        async function fetchDestination() {
            const file = await import("../../lib/data.json");

            // console.log(file.default);
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
                <div className="technology-select">
                    <button
                        onClick={() => setTechnology("Launch vehicle")}
                        className={`${
                            technology === "Launch vehicle" ? "active" : ""
                        }`}
                    >
                        1
                    </button>
                    <button
                        onClick={() => setTechnology("Spaceport")}
                        className={`${
                            technology === "Spaceport" ? "active" : ""
                        }`}
                    >
                        2
                    </button>
                    <button
                        onClick={() => setTechnology("Space capsule")}
                        className={`${
                            technology === "Space capsule" ? "active" : ""
                        }`}
                    >
                        3
                    </button>
                </div>
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
