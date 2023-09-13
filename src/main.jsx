import register from "preact-custom-element";
import { useEffect, useState } from "preact/compat";

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

register(Greeting, "x-greeting", ["name"], { shadow: true });
