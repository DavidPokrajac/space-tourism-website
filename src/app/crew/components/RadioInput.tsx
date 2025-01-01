import { ChangeEvent } from "react";

interface RadioInputProps {
    type: "radio";
    name: string;
    id: string;
    value: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioInput({
    name,
    id,
    value,
    checked,
    onChange,
    type,
}: RadioInputProps) {
    return (
        <input
            type={type}
            name={name}
            id={id}
            value={value}
            checked={checked}
            onChange={onChange}
        />
    );
}
