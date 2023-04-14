//Creating a Counter Component using class

import React, {Component} from 'react'

class AclassCounter extends Component {
    //creating state variable called count
    constructor(props){
        super(props)
    // Set Counter to 0
        this.state ={
            count: 0 
        }
    }

    //Creating a method called incrementCount which increments count value by 1 
     incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
        
     }

    //Render Part of a Component
    //Create a button to increment 

    render(){
        return(
            <div>
                <button onClick={this.incrementCount}> Count {this.state.count} </button>
            </div>
        )
    }
}

export default AclassCounter 