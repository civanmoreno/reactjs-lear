import {Component} from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        //this.increment = this.increment.bind(this);
    }
    increment = () =>{
        console.log(this);
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return(
            <div className="container">
                <h1>Counter is: {this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
export default Counter;