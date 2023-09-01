import React from 'react'
import { Component } from 'react'

class FormClass extends Component{
    state = {
        Name: " ",
        Dept: " ",
        Rating: " ",
        EmpData : []
    }
    changeHandle = (e) => {
        this.setState({[e.target.name] : e.target.value})
        this.setState({[e.target.dept] : e.target.value})

        console.log(this.state.Name)
        console.log(this.state.Dept)
    }
    clickHandle = (e) => {
        e.preventDefault();
        let newObj = {
            name: this.state.Name,
            dept: this.state.Dept,
            rating: this.state.Rating
        }
        if(newObj.name === " " && newObj.dept === " " && newObj.rating === " "){
            alert('Fill the fields which are required.')
        }
        else{
            this.state.EmpData.push(newObj)
            this.setState({
                EmpData: this.state.EmpData,
                Name:'',
                Dept:'',
                Rating:''
            })
        }
        console.log(newObj)
        
        
        
    }
    render(){
        return(
            <>
            <h1 id='header'>EMPLOYEE FEEDBACK FORM</h1>
            <form id='form'>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={this.state.Name} name="Name" onChange={this.changeHandle} required/><br/>
                <label htmlFor="dept">Department:</label>
                <input type="text" id="dept" value={this.state.Dept} name="Dept" onChange={this.changeHandle} required/><br/>
                <label htmlFor="rating">Rating:</label>
                <input type="number" id="rating" value={this.state.Rating} name="Rating" onChange={this.changeHandle} required/> <br/>
                <button id="btn" onClick={this.clickHandle}>Submit</button>
            </form>
            <div className='EmpData'>
            {this.state.EmpData.map((item,index)=>{
                return(
                    <div key={index}>
                        <div className='data'>Name: {item.name} | Dept: {item.dept} | Rating: {item.rating}</div>
                    </div>
                )
            })
            }
            </div>
            </>
        )
        
    }
    
}
export default FormClass;