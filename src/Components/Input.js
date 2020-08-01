import React, { Component } from 'react';


class Input extends Component{

    render(){

        return(

            <div className="div">
                <h1>Please Login!</h1>

                <form>
                <input placeholder='email' type='text'/>
                 <br/>
                <input placeholder='Password:' id='submit' type='password'/>
                <br/>
                <label for='female'>Female:</label>
                 <input name='gender'id='female'  type='radio'/>
                 <label for='male'>Male:</label>
                <input name='gender' id='male'type='radio'/>
                <br/>
                <input type='text'/>
                 <br/>
                <input type='text'/>
                 <br/>
                </form>
            </div>
        )
    }
}
export default Input;