import React from "react";

type TabProps = {
    isActive: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

export const Tab = ({ isActive, children, onClick}: TabProps) => {
    return (
        <button
            className={`tab ${isActive ? "tab-active" : ""}`}
            onClick={onClick}
        >
            {children}
        </button>
)};