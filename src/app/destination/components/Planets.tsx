"use client";

import { useState, useEffect, useRef } from "react";
import { DestinationInfoProps } from "../page";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { Fragment } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Dest = {
    destination: DestinationInfoProps[];
};

export default function Planets({ destination }: Dest) {
    const [size, setSize] = useState<number>(150);

    const planetRef = useRef<HTMLDivElement>(null);
    const planetImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 676) {
                setSize(150);
            } else if (window.innerWidth > 676 && window.innerWidth <= 1092) {
                setSize(300);
            } else if (window.innerWidth > 1092) {
                setSize(480);
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [size]);

    useGSAP(() => {
        gsap.fromTo(
            ".planet-details",
            { opacity: 0 },
            { opacity: 1, duration: 0.75, stagger: 0.75 }
        );
        gsap.fromTo(
            ".planet-img",
            { opacity: 0 },
            { opacity: 1, duration: 0.75, stagger: 0.75 }
        );
        gsap.fromTo(
            ".planet-img",
            { y: "-50vw" },
            { y: 0, duration: 2, stagger: 1, ease: "power1.out" }
        );
        if (window.innerWidth < 500) {
            gsap.fromTo(
                ".planet-img",
                { x: "-50vw", y: 0 },
                { x: 0, y: 0, duration: 2, stagger: 1, ease: "power1.out" }
            );
        }
        switch (planetRef.current?.classList[1]) {
            case "moon-details":
                gsap.fromTo(
                    ".planet-details",
                    { x: "50vw" },
                    { x: 0, duration: 1 }
                );
                break;
            case "mars-details":
                gsap.fromTo(
                    ".planet-details",
                    { y: "50vw" },
                    { y: 0, duration: 1 }
                );
                break;
            case "europa-details":
                gsap.fromTo(
                    ".planet-details",
                    { x: "-50vw" },
                    { x: 0, duration: 1 }
                );
                break;
            case "titan-details":
                gsap.fromTo(
                    ".planet-details",
                    { y: "-50vw" },
                    { y: 0, duration: 1 }
                );
                break;
        }
    }, [destination]);

    return (
        <>
            {destination.map((destination: DestinationInfoProps) => {
                return (
                    <Fragment key={uuidv4()}>
                        <div className="planet-img" ref={planetImageRef}>
                            <Image
                                src={destination.images.png}
                                alt={`An image of a planet ${destination.name}`}
                                width={size}
                                height={size}
                            />
                        </div>
                        <div
                            className={`planet-details ${
                                destination.name.toLocaleLowerCase() +
                                "-details"
                            }`}
                            ref={planetRef}
                        >
                            <h2 className="planet-name">{destination.name}</h2>
                            <p>{destination.description}</p>
                            <div className="planet-averages-container">
                                <div className="planet-averages">
                                    <span>Avg. distance</span>
                                    <span className="planet-average-value">
                                        {destination.distance}
                                    </span>
                                </div>
                                <div className="planet-averages">
                                    <span>Est. travel time</span>
                                    <span className="planet-average-value">
                                        {destination.travel}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                );
            })}
        </>
    );
}
