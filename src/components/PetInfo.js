import React, {useState} from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import './Form.css';

function PetInfo() {
	const [name , setName] = useState('');
	const [type , setType] = useState('');


	const handleChange =(e)=>{
	setName(e.target.value);
	}
	const handleTypeChange =(e)=>{
	setType(e.target.value);
	}
	const handleSubmit=(e)=>{
	e.preventDefault();
	}
	
return (
	<div className="Form">
    <header className="Form-header">
	<form onSubmit={(e) => {handleSubmit(e)}}>
    <label >
    Pet Name:
    </label><br/>
    <input type="text" value={name} maxLength="25" required onChange={(e) => {handleChange(e)}} /><br/>
    {}
    <label >
    Type:
    </label><br/>
    <input type="select" value={type} required onChange={(e) => {handleTypeChange(e)}} /><br/>
    {}
    <input type="submit" value="Submit"/>
	</form>
	</header>
	</div>
);
};

export default PetInfo;
