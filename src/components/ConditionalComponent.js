import { useState } from "react";
import Counter from './Counter'
import FunctionalCounter from "./FunctionalCounter";
function ConditionalComponent() {
    const [display, setDisplay] = useState(false);

    return display ? <h3>TrueR</h3> : <h3>FalseR</h3>;
    /*
    let output;
    if (display) {
        output = <h3>This is first output</h3>
    } else {
        output = <h3>This is else output</h3>
    }

    return <div>{output}</div>
    /*
    if (display) {
        return(
            <Counter/>
        )
    } else {
        return (
            <FunctionalCounter/>
        );
    }
    */
}
export default ConditionalComponent;