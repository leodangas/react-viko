import React from "react";

interface WrapperInterface {
    children: React.ReactNode
}
export default function Wrapper({children} : WrapperInterface) {
    return (
        <div className={"wrapper"}>
            {children}
        </div>
    )
}