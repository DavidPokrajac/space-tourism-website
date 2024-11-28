"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { v4 as uuidv4 } from "uuid";

export interface CrewInfoProps {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    role: string;
    bio: string;
}

export default function Crew() {
    const [crewMember, setCrewMember] = useState<string>("Douglas Hurley");
    const [crewMemberInfo, setCrewMemberInfo] = useState<CrewInfoProps[]>([]);

    useEffect(() => {
        async function fetchDestination() {
            const file = await import("../../lib/data.json");

            // console.log(file.default);
            const selectedDestination = file.default.crew.filter(
                (d) => d.name === crewMember
            );
            setCrewMemberInfo(selectedDestination);
        }
        fetchDestination();
    }, [crewMember]);

    return (
        <>
            <Header />
            <div>
                <h1>02 Meet your crew</h1>
                {crewMemberInfo.map((crewMember) => {
                    return (
                        <div key={uuidv4()}>
                            <p>{crewMember.role}</p>
                            <h2>{crewMember.name}</h2>
                            <p>{crewMember.bio}</p>
                        </div>
                    );
                })}
                <input
                    type="radio"
                    name="crew-member"
                    id=""
                    onChange={() => setCrewMember("Douglas Hurley")}
                    checked
                />
                <input
                    type="radio"
                    name="crew-member"
                    id=""
                    onChange={() => setCrewMember("Mark Shuttleworth")}
                />
                <input
                    type="radio"
                    name="crew-member"
                    id=""
                    onChange={() => setCrewMember("Victor Glover")}
                />
                <input
                    type="radio"
                    name="crew-member"
                    id=""
                    onChange={() => setCrewMember("Anousheh Ansari")}
                />
            </div>
        </>
    );
}
