// Simple Syntax.
/*
function Hello() {
    return <h1>Hello Iván</h1>
}*/

// JSX.
const name = "Iván";
const displayMessage = ()=> {
    return "I need help!";
}

function Hello() {
    return <h1>Hello {name}</h1>
    //return <h1>Hello {displayMessage()}</h1>
    //return <h1>Total {10 + 20}</h1>
}

// ES6 Syntax.
//const Hello = ()=> <h1>Hello Iván Two</h1>

// Export component.
export default Hello;