import { ChangeEvent } from "react";

interface InputRadioProps {
    crewMember: string;
    handleCrewMember: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputRadioMenu({
    crewMember,
    handleCrewMember,
}: InputRadioProps) {
    return (
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
    );
}
