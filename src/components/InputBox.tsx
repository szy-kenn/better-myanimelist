import React, { useState, useRef, useEffect } from "react";
import inputStyle from "@/sass/input.module.scss";

const InputBox = ({
    type,
    text,
    valueKey,
    onChange,
    placeholder,
}: {
    type: string;
    text: string;
    valueKey: string;
    onChange: (key: string, value: any) => void;
    placeholder?: string;
}) => {
    const [focused, setFocused] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        setFocused(true);
        inputRef.current?.focus();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        onChange(valueKey, newVal);
    };

    return (
        <div
            className={
                inputStyle.container + " " + (focused ? inputStyle.focused : "")
            }
            data-content={text}
            ref={divRef}
            onClick={handleClick}>
            <input
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                ref={inputRef}
            />
        </div>
    );
};

export default InputBox;
