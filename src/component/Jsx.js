import React , {Component} from 'react'

class Jsx extends Component {
    render(){
        return(
            // <div>
            // <h1>Hello World</h1>
            // </div>

            React.createElement("div",null,React.createElement("h1", null,"hello world"))
        )
    }
}
export default Jsx;
