import React from 'react'

class FormHandling extends React.Component{
    constructor(){
        super()
        this.state={
            username : '',
            comments : '',
            courses : '',
        }
    }
    usernameHandler = (event)=>{
        this.setState({
            username: event.target.value
        })
    }
    commentHandler = event=>{
        this.setState({
            comments : event.target.value
        })
        // console.log(event.target)
    }
    coursesHandler=(event)=>{
        this.setState({
            courses:event.target.value
        })
        console.log(event.target.value)
    }
    submitHandler =(event)=>{
        event.preventDefault();
        // alert($(this.state.username) )
    }
    render(){
        return(
            <div>
               <form onSubmit={this.submitHandler}>
                   <div className="space">
                       <label>Username </label>
                       <input type="text" value={this.state.username} onChange={this.usernameHandler}/>
                   </div>
                   <div className="space">
                       <label>Comments </label>
                       <textarea  value={this.state.comments} onChange={this.commentHandler}/>
                   </div>
                   <div className="space">
                       <label>Courses</label>
                       <select value={this.state.courses} onChange={this.coursesHandler}>
                           <option>ReactJS</option>
                           <option>NodeJS</option>
                           <option>MySQL</option>
                           <option>Django</option>
                       </select>
                   </div>
                   <div className="space">
                       <button type="submit"> Submit</button>
                   </div>
               </form>
            </div>
        );
    }

}
export default FormHandling;
