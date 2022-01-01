
import React, { useState } from 'react';

import Modal from '../UI/Modal/Modal';

function UserForm(props){

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [error, setError] = useState('');

    const changeNameHandler = (ev) => {
        if(ev.target.value){
            setName(ev.target.value);
        }
    }

    const changeAgeHandler = (ev) => {
        if(ev.target.value){
            setAge(ev.target.value);
        }
    }

    const submitHandler = () => {
        if(!name){
            setError('Name not found');
            return;
        }
        if(!age){
            setError('Age not found');
            return;
        }
        if(name && age){
            console.log('user-form')
            console.log(name, age);
            props.onAddUser(name, age);
        }
    }

    const closeHandler = () => {
        setError('');
    }

    return(
        <div>
            <div className="control-label">
                <label>Name :</label>
                <input type="text" name="name" onChange={changeNameHandler} />
            </div>
            <div className="control-label">
                <label>Age :</label>
                <input type="number" name="age" onChange={changeAgeHandler}/>
            </div>
            <button onClick={submitHandler}>Submit</button>
            { error ?
                (<div className="backdrop">
                    <Modal error={error} onClose={closeHandler} />
                </div>) : null
            }
        </div>
    )
}

export default UserForm;
