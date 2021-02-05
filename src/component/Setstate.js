import React, {Component} from 'react'

class Setstate extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    // function Increment(props) {
    //     this.setState({
    //         count : this.state.count +1
    //     })
    // }
    
    Increment = ()=>{
        this.setState({
            count : this.state.count +1
        })
        console.log(this.state.count)
    }
    

    render(){
        return(
            <div>
               <h1> count = {this.state.count}</h1>
               <button onClick={this.Increment} >Increase</button>
            </div>
        )  
    }
}
export default Setstate;