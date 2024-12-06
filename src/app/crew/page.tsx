"use client";
import { useState, useEffect, ChangeEvent, Fragment } from "react";
import Header from "@/components/Header";
import { v4 as uuidv4 } from "uuid";
import "../css/crew.css";
import Image from "next/image";

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
    const [widthSize, setWidthSize] = useState<number>(271);
    const [heightSize, setHeightSize] = useState<number>(340);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 676) {
                setWidthSize(271);
                setHeightSize(340);
            } else if (window.innerWidth > 676 && window.innerWidth <= 1092) {
                setWidthSize(446);
                setHeightSize(560);
            } else if (window.innerWidth > 1092) {
                setWidthSize(540);
                setHeightSize(676);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [widthSize, heightSize]);

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
            <div className="crew-container">
                <p className="introduction">
                    <span>02</span> Meet your crew
                </p>
                {crewMemberInfo.map((crewMember) => {
                    return (
                        <Fragment key={uuidv4()}>
                            <div className="crew-member-details">
                                <div className="crew-member-name">
                                    <p className="crew-member-role">
                                        {crewMember.role}
                                    </p>
                                    <h2 className="crew-member-name">
                                        {crewMember.name}
                                    </h2>
                                </div>
                                <p>{crewMember.bio}</p>
                            </div>
                            <div className="crew-member-img">
                                <Image
                                    src={crewMember.images.png}
                                    width={widthSize}
                                    height={heightSize}
                                    alt=""
                                />
                            </div>
                        </Fragment>
                    );
                })}
                <div className="crew-member-select">
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
            </div>
        </>
    );
}
