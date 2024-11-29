"use client";
import { useState, useEffect, ChangeEvent } from "react";
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
            setCrewMemberInfo([...selectedDestination]);
        }
        fetchDestination();
    }, [crewMember]);

    function handleCrewMember(event: ChangeEvent<HTMLInputElement>) {
        setCrewMember(event.target.value);
    }

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
                    id="douglas-hurley"
                    onChange={(event) => handleCrewMember(event)}
                    value="Douglas Hurley"
                    checked={crewMember === "Douglas Hurley"}
                />
                <input
                    type="radio"
                    name="crew-member"
                    id="mark-shuttleworth"
                    onChange={(event) => handleCrewMember(event)}
                    value="Mark Shuttleworth"
                />
                <input
                    type="radio"
                    name="crew-member"
                    id="victor-glover"
                    onChange={(event) => handleCrewMember(event)}
                    value="Victor Glover"
                />
                <input
                    type="radio"
                    name="crew-member"
                    id="anousheh-ansari"
                    onChange={(event) => handleCrewMember(event)}
                    value="Anousheh Ansari"
                />
            </div>
        </>
    );
}
