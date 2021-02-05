import React, {Component} from 'react'

class EventHandling extends Component{
    constructor(){
        super()
        this.state={
            message : "Hello, Welcome"
        }
        // this.eventHandler = this.eventHandler.bind(this)
    }

    // eventHandler = ()=>{
    //     this.setState({
    //         message : "Bye ...!"
    //     })
    //     console.log(this.state)
    // }

    eventHandler = () =>{
        this.setState({
                    message : "Bye ...!"
                })
                console.log(this)
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.eventHandler}>Click me</button>
            </div>
        );

    }
}
export default EventHandling;