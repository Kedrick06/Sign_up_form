import React, { Component } from 'react';


class Input extends Component{

    render(){

        return(

            <div className="div">
                <h1>Please Login!</h1>

                <form>
                <input placeholder='Enter Your Email:' type='text' id='submit'/>
                 <br/>
                 <input placeholder='Enter Your Username:' type='text' id='submit'/>
                 <br></br>
                <input placeholder='Enter Your Password:' id='submit' type='password'/>
                <br/>
                <input type="submit" value="Submit" />
                <br></br>
                <label for='female'> Female: </label>
                 <input name='gender' id='female'  type='radio'/>
                 <br></br>
                 <label for='male'> Male: </label>
                <input name='gender' id='male'type='radio'/>
                <br/>
                <input type='text' placeholder='Enter Your Job:' name='occupation' id='submit'/>
                 <br/>
                <input type='text' placeholder='Enter Your City:' name='city' id='submit'/>
                 <br/>
                 <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
export default Input;