"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Planets from "./components/Planets";

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
            <Navigation />
            <div>
                <h1>01 Pick your destination</h1>
                <div>
                    <button onClick={() => setDestination("Moon")}>Moon</button>
                    <button onClick={() => setDestination("Mars")}>Mars</button>
                    <button onClick={() => setDestination("Europa")}>
                        Europa
                    </button>
                    <button onClick={() => setDestination("Titan")}>
                        Titan
                    </button>
                </div>
                <></>
                <Planets destination={destinationInfo} />
            </div>
        </>
    );
}
