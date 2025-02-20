import React from "react";

interface InputInterface {
    type: "text" | "number";
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    className?: string;
}
export default function Input({type, id, name, value, onChange, error,className} : InputInterface) {
    return (
        <input type={type} id={id} name={name} className={`component-input ${error ? 'invalid' : ''} ${className ? className : ''}`} value={value} onChange={onChange} />
    )
}