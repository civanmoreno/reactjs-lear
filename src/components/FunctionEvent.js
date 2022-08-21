function FunctionEvent() {
    const handleClick = ()=>{
        console.log('Button Click');
    }
    return(
        <div>
            Functional Component
            <button onClick={handleClick}>Click</button>
        </div>
    );
}
export default FunctionEvent;