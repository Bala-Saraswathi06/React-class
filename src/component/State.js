import React, {Component} from 'react'

class State extends Component {
    constructor(){
        super()
        this.state = {
            name : "bala",
            age : "20",
        }
    }

    render(){
        return(
            <div>
                <h1>hello {this.state.name} </h1>
                <h2>age : {this.state.age}</h2>
                age : {this.state.age}
            </div>
        )  
    }
}
export default State;