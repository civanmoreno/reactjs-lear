import { Component } from "react";

class ClassEvent extends Component {
    handleClick(){
        console.log('Class Event handling');
    }
    render(){
        return(
        <div>This is a class based component
            <button onClick={this.handleClick}>Click Here</button>
        </div>
        )
    }
}
export default ClassEvent;