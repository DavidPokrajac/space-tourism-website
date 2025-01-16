"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChangeEvent } from "react";
import ForwardedInput from "./Input";

gsap.registerPlugin(useGSAP);

interface InputRadioProps {
    crewMember: string;
    handleCrewMember: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputRadioMenu({
    crewMember,
    handleCrewMember,
}: InputRadioProps) {
    const firstRadioRef = useRef<HTMLInputElement>(null);
    const secondRadioRef = useRef<HTMLInputElement>(null);
    const thirdRadioRef = useRef<HTMLInputElement>(null);
    const fourthRadioRef = useRef<HTMLInputElement>(null);

    useGSAP(() => {
        gsap.set(".active-radio", {
            width: firstRadioRef.current?.offsetWidth,
            height: firstRadioRef.current?.offsetHeight,
            top: firstRadioRef.current?.offsetTop,
        });
        switch (crewMember) {
            case "Douglas Hurley":
                gsap.to(".active-radio", {
                    width: firstRadioRef.current?.offsetWidth,
                    left: firstRadioRef.current?.offsetLeft,
                    duration: 0.5,
                    ease: "power2.out",
                });
                break;
            case "Mark Shuttleworth":
                gsap.to(".active-radio", {
                    width: secondRadioRef.current?.offsetWidth,
                    left: () => secondRadioRef.current?.offsetLeft as number,
                    duration: 0.5,
                    ease: "power2.out",
                });
                break;
            case "Victor Glover":
                gsap.to(".active-radio", {
                    width: thirdRadioRef.current?.offsetWidth,
                    left: () => thirdRadioRef.current?.offsetLeft as number,
                    duration: 0.5,
                    ease: "power2.out",
                });
                break;
            case "Anousheh Ansari":
                gsap.to(".active-radio", {
                    width: fourthRadioRef.current?.offsetWidth,
                    left: () => fourthRadioRef.current?.offsetLeft as number,
                    duration: 0.5,
                    ease: "power2.out",
                });
                break;
        }
    }, [crewMember]);

    return (
        <div className="crew-member-select">
            <span className="active-radio"></span>
            <ForwardedInput
                type="radio"
                name="crew-member"
                id="douglas-hurley"
                onChange={(event) => handleCrewMember(event)}
                value="Douglas Hurley"
                crewMember={crewMember}
                ref={firstRadioRef}
            />
            <ForwardedInput
                type="radio"
                name="crew-member"
                id="mark-shuttleworth"
                onChange={(event) => handleCrewMember(event)}
                value="Mark Shuttleworth"
                crewMember={crewMember}
                ref={secondRadioRef}
            />
            <ForwardedInput
                type="radio"
                name="crew-member"
                id="victor-glover"
                onChange={(event) => handleCrewMember(event)}
                value="Victor Glover"
                crewMember={crewMember}
                ref={thirdRadioRef}
            />
            <ForwardedInput
                type="radio"
                name="crew-member"
                id="anousheh-ansari"
                onChange={(event) => handleCrewMember(event)}
                value="Anousheh Ansari"
                crewMember={crewMember}
                ref={fourthRadioRef}
            />
        </div>
    );
}
