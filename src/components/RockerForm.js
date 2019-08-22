import React, { useState } from "react";

const RockerForm = props => {
    const [form, setForm] =useState({name: "", email: "", role: "", age: "", birthplace: "", acts: ""});

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
            const newRocker = {...form, id: Date.now()
        };
        props.addNewRocker(newRocker);
        setForm({name: "", email: "", role: "", age: "", birthplace: "", acts: ""});
    };

    return (
    <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        name="name" 
        placeholder="Write Some Junk Here" 
        value={form.name} 
        onChange={changeHandler}/>

        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        name="email" 
        placeholder="Write Some Junk Here"
        value={form.email} 
        onChange={changeHandler}/>

        <label htmlFor="role">Role</label>
        <input 
        type="text" 
        name="role" 
        placeholder="Write Some Junk Here"
        value={form.role} 
        onChange={changeHandler}/>

        <label htmlFor="age">Age</label>
        <input 
        type="text" 
        name="age" 
        placeholder="Write Some Junk Here"
        value={form.age} 
        onChange={changeHandler}/>

        <label htmlFor="birthplace">Birthplace</label>
        <input 
        type="text" 
        name="birthplace" 
        placeholder="Write Some Junk Here"
        value={form.birthplace} 
        onChange={changeHandler}/>

        <label htmlFor="acts">Acts</label>
        <input 
        type="text" 
        name="acts" 
        placeholder="Write Some Junk Here"
        value={form.acts} 
        onChange={changeHandler}/>

    <button type="submit">Hit Me!</button>
    </form>
    );
};

export default RockerForm;

//ADD THE VALUE THING!!!!