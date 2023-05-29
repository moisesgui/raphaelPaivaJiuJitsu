import React, { useState, useEffect, FormEvent } from "react";


export const NossoTime = () => {

    return (
        <>
            <button onClick={() => window.history.back()}>
                voltar
            </button>
            <h1>Nosso Time</h1>
        </>
    );
}