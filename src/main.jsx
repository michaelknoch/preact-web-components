import React, { useEffect, useState } from "react";
import r2wc from "@r2wc/react-to-web-component";

const Greeting = ({ name = "World" }) => {
    useEffect(() => {
        console.log("lol");
    });

    const [counter, setCounter] = useState(0);

    return (
        <>
            <p>
                Hello, {name}! {counter}
            </p>
            <button onClick={() => setCounter((oldState) => ++oldState)}>button</button>
        </>
    );
};

const WebGreeting = r2wc(Greeting);

customElements.define("web-greeting", WebGreeting);
