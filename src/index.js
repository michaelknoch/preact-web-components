import register from "preact-custom-element";
import { useEffect } from "preact/compat";

const Greeting = ({ name = "World" }) => {
    useEffect(() => {
        console.log("lel");
    });

    return <p>Hello, {name}!</p>;
};

register(Greeting, "x-greeting", ["name"], { shadow: false });
register(Greeting, "x-greeting", ["name"], { shadow: false });
register(Greeting, "x-greeting", ["name"], { shadow: false });

export default null;
