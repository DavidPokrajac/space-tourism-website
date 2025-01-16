import { ChangeEvent } from "react";
import { forwardRef } from "react";

interface CrewInputProps {
    type: "radio";
    name: "crew-member";
    id: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    crewMember: string;
}

function Input(
    { type, name, id, onChange, value, crewMember }: CrewInputProps,
    ref: React.Ref<HTMLInputElement>
) {
    return (
        <input
            type={type}
            name={name}
            id={id}
            onChange={onChange}
            value={value}
            checked={crewMember === value}
            ref={ref}
        />
    );
}

const ForwardedInput = forwardRef(Input);

export default ForwardedInput;
