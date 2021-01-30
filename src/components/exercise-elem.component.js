import React, { Component , useEffect, useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import "react-datepicker/dist/react-datepicker.css";


export default class ExerciseElem extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.del = this.del.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        this.state = {
        count : 1,
        pointless : 1,
        colorbutton: "#343a40",
        opendesc: false
        }
    }

    add(e){
        e.preventDefault();
        const listIds = localStorage.getItem('id_list');

        if(listIds.includes(this.props.exercise._id)){
           this.setState({colorbutton:"#343a40"})
           if(listIds !== null && listIds !== "" && this.props.exercise !== null && this.props.exercise !==""){
            if(listIds.includes(JSON.stringify(this.props.exercise._id)+',')){
                const newIDlist  = listIds.replace((JSON.stringify(this.props.exercise._id)+','),'')
                localStorage.setItem('id_list', newIDlist)
            }
            else if(listIds.includes(','+JSON.stringify(this.props.exercise._id))){
                const newIDlist  = listIds.replace((','+JSON.stringify(this.props.exercise._id)),'')
                localStorage.setItem('id_list', newIDlist)
            }
            else if(listIds.includes(JSON.stringify(this.props.exercise._id))){
                const newIDlist  = listIds.replace((JSON.stringify(this.props.exercise._id)),'')
                localStorage.setItem('id_list', newIDlist)
            }
            }else{
                console.log("error : list ID empty")
            }
        }
        
        else {
            this.setState({colorbutton:"green"})
            if(listIds === "" || listIds === null){
                const newIDlist = JSON.stringify(this.props.exercise._id)
                localStorage.setItem('id_list', newIDlist)
            }
            else{
                    const newIDlist = listIds + ',' + JSON.stringify(this.props.exercise._id)
                    localStorage.setItem('id_list', newIDlist)
            }
        }
    }

    del(e){
        e.preventDefault();
        const listIds = localStorage.getItem('id_list');
        if(listIds !== null && listIds !== "" && this.props.exercise !== null && this.props.exercise !==""){
            if(listIds.includes(JSON.stringify(this.props.exercise._id)+',')){
                const newIDlist  = listIds.replace((JSON.stringify(this.props.exercise._id)+','),'')
                localStorage.setItem('id_list', newIDlist)
                this.handlerhere()
            }
            else if(listIds.includes(','+JSON.stringify(this.props.exercise._id))){
                const newIDlist  = listIds.replace((','+JSON.stringify(this.props.exercise._id)),'')
                localStorage.setItem('id_list', newIDlist)
                this.handlerhere()
            }
            else if(listIds.includes(JSON.stringify(this.props.exercise._id))){
                const newIDlist  = listIds.replace((JSON.stringify(this.props.exercise._id)),'')
                localStorage.setItem('id_list', newIDlist)
                this.handlerhere()
            }
        }else{
            console.log("error : list ID empty")
        }
    }

    handlerhere(){
        this.props.handler()     
    }

    componentDidMount(){

        const listIds = localStorage.getItem('id_list');
        if(listIds !== null && listIds !== "" && this.props.exercise !== null && this.props.exercise !==""){
        
        if(listIds.includes(this.props.exercise._id)){
           this.setState({colorbutton:"green"})
        }       
        else {
            this.setState({colorbutton:"#343a40"})
    }
    }else{
        console.log("error : list ID empty")
}
}

    toggleOpen(){
        this.setState({opendesc: !this.state.opendesc})
        console.log(this.state.opendesc)
    }

   render() {
    let button;
    if (this.props.val === "Add") {
      button = <td><button onClick={this.add} className="btn add" style = {{backgroundColor:this.state.colorbutton}}>Add</button></td>
    } 
    if(this.props.val === "Delete"){
        const listIds = localStorage.getItem('id_list');
        if(this.props.exercise.name !== "" && listIds !== ""){
            button = <td><button onClick={this.del} className="btn btn-outline-dark" >Del</button></td>
        }else{
            button = <td></td>
        }
    }

    let seemore;
    if(this.props.exercise.reference != null){
        seemore = <td><a href={this.props.exercise.reference}>Go to video</a></td>
    }else{
        seemore = <td></td>
    }

    let age;
    if(this.props.exercise.age === 'Any'){
        age = <td>Adult, Children</td>
    }else{
        age = <td>{this.props.exercise.age}</td>
    }
    
    return (
    <tr key = {this.props.exercise._id} >        
        <td>{this.props.exercise.name}</td>
        <td>   
        <Button style = {{}} className="btn desc"
        onClick={() => this.toggleOpen()}
        aria-controls="example-collapse-text"
        aria-expanded={this.state.opendesc}
      >
        Description
      </Button>
            <Collapse in={this.state.opendesc}>
                
        <div id="example-collapse-text">
          {this.props.exercise.description}
        </div>
      </Collapse>
  </td>
        <td>{this.props.exercise.skill}</td>
        {age}
        {seemore}
        {button}
    </tr> 
    )
  }
}