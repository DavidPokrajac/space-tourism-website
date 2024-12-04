"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Planets from "./components/Planets";
import "../css/destination.css";

export interface DestinationInfoProps {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
}

export default function Destination() {
    const [destination, setDestination] = useState<string>("Moon");
    const [destinationInfo, setDestinationInfo] = useState<
        DestinationInfoProps[]
    >([]);
    useEffect(() => {
        async function fetchDestination() {
            const file = await import("../../lib/data.json");

            // console.log(file.default);
            const selectedDestination = file.default.destinations.filter(
                (d) => d.name === destination
            );
            setDestinationInfo(selectedDestination);
        }
        fetchDestination();
    }, [destination]);
    return (
        <>
            <Header />
            <div className="destination-container">
                <p className="introduction">
                    <span>01</span> Pick your destination
                </p>
                <div className="buttons-menu">
                    <button
                        onClick={() => setDestination("Moon")}
                        className={`btn-secondary ${
                            destination === "Moon"
                                ? "destination-btn-active"
                                : ""
                        }`}
                    >
                        Moon
                    </button>
                    <button
                        onClick={() => setDestination("Mars")}
                        className={`btn-secondary ${
                            destination === "Mars"
                                ? "destination-btn-active"
                                : ""
                        }`}
                    >
                        Mars
                    </button>
                    <button
                        onClick={() => setDestination("Europa")}
                        className={`btn-secondary ${
                            destination === "Europa"
                                ? "destination-btn-active"
                                : ""
                        }`}
                    >
                        Europa
                    </button>
                    <button
                        onClick={() => setDestination("Titan")}
                        className={`btn-secondary ${
                            destination === "Titan"
                                ? "destination-btn-active"
                                : ""
                        }`}
                    >
                        Titan
                    </button>
                </div>
                <></>
                <Planets destination={destinationInfo} />
            </div>
        </>
    );
}
