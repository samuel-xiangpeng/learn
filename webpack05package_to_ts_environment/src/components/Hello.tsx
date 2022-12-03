import React from "react";

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => {
    console.table("SAMUEL-COPY")
    return <h1>Hello from {props.compiler} and {props.framework}!</h1>
};