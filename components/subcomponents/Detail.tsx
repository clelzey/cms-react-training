import React from "react";

export function Detail({ tag, info }) {
    return (
        <p>
            <b>{tag}:</b> {info}
        </p>
    );
}