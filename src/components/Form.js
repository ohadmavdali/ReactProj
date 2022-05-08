import React, {useState} from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import './Form.css';

function Form() {
	const [name , setName] = useState('');
	const [age , setAge] = useState('');


	const handleChange =(e)=>{
	setName(e.target.value);
	}
	const handleAgeChange =(e)=>{
	setAge(e.target.value);
	}
	const handleSubmit=(e)=>{
	e.preventDefault();
	}
	
return (
	<div className="Form">
    <header className="Form-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>
	<h5> Sign up </h5>
    <br></br>
    <label >
    Name:
    </label><br/>
    <input type="text" value={name} maxLength="25" required onChange={(e) => {handleChange(e)}} /><br/>
    {}
    <label >
    Age:
    </label><br/>
    <input type="number" min="0" value={age} required onChange={(e) => {handleAgeChange(e)}} /><br/>
    {}
    <input type="submit" value="Submit"/>
	</form>
	</header>
	</div>
);
}

export default Form;
