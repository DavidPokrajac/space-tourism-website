"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface ButtonsMenuProps {
    destination: string;
    handleDestination: (value: string) => void;
}

export default function ButtonsMenu({
    destination,
    handleDestination,
}: ButtonsMenuProps) {
    const firstRef = useRef<HTMLButtonElement>(null);
    const secondRef = useRef<HTMLButtonElement>(null);
    const thirdRef = useRef<HTMLButtonElement>(null);
    const fourthRef = useRef<HTMLButtonElement>(null);
    const activeSpan = useRef<HTMLButtonElement>(null);

    useGSAP(() => {
        gsap.set(".active-something", {
            width: firstRef.current?.offsetWidth,
            height: firstRef.current?.offsetHeight,
            top: 0,
        });
        switch (destination) {
            case "Moon":
                gsap.to(".active-something", {
                    width: firstRef.current?.offsetWidth,
                    left: 0,
                    duration: 1.5,
                    ease: "elastic.out(1,0.6)",
                });
                break;
            case "Mars":
                gsap.to(".active-something", {
                    width: secondRef.current?.offsetWidth,
                    left: () => secondRef.current?.offsetLeft as number,
                    duration: 1.5,
                    ease: "elastic.out(1,0.6)",
                });
                break;
            case "Europa":
                gsap.to(".active-something", {
                    width: thirdRef.current?.offsetWidth,
                    left: () => thirdRef.current?.offsetLeft as number,
                    duration: 1.5,
                    ease: "elastic.out(1,0.6)",
                });
                break;
            case "Titan":
                gsap.to(".active-something", {
                    width: fourthRef.current?.offsetWidth,
                    left: () => fourthRef.current?.offsetLeft as number,
                    duration: 1.5,
                    ease: "elastic.out(1,0.6)",
                });
                break;
        }
    }, [destination]);

    return (
        <div className="buttons-menu">
            <button
                ref={firstRef}
                onClick={() => handleDestination("Moon")}
                className={`btn-secondary ${
                    destination === "Moon" ? "destination-btn-active" : ""
                }`}
            >
                <span ref={activeSpan} className="active-something"></span>
                Moon
            </button>
            <button
                ref={secondRef}
                onClick={() => handleDestination("Mars")}
                className={`btn-secondary ${
                    destination === "Mars" ? "destination-btn-active" : ""
                }`}
            >
                Mars
            </button>
            <button
                ref={thirdRef}
                onClick={() => handleDestination("Europa")}
                className={`btn-secondary ${
                    destination === "Europa" ? "destination-btn-active" : ""
                }`}
            >
                Europa
            </button>
            <button
                ref={fourthRef}
                onClick={() => handleDestination("Titan")}
                className={`btn-secondary ${
                    destination === "Titan" ? "destination-btn-active" : ""
                }`}
            >
                Titan
            </button>
        </div>
    );
}
