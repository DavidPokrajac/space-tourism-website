"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { v4 as uuidv4 } from "uuid";

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
            <div>
                <h1>03 Space launch 101</h1>
                <span>The terminology</span>
                <div>
                    <button onClick={() => setTechnology("Launch vehicle")}>
                        1
                    </button>
                    <button onClick={() => setTechnology("Spaceport")}>
                        2
                    </button>
                    <button onClick={() => setTechnology("Space capsule")}>
                        3
                    </button>
                </div>
                <div>
                    {technologyInfo.map((technology) => {
                        return (
                            <div key={uuidv4()}>
                                <h2>{technology.name}</h2>
                                <p>{technology.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
