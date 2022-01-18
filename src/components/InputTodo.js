import React, { Fragment, useState } from "react";

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async(e) => {
        // prevent refreshing
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json "},
            body: JSON.stringify(body)
        });

        window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }


    return (
<Fragment>
    <h1
        className ="text-center mt-5" > Personal To-Do List
    </h1>
    <h2
        className ="text-center mt-5" > Enter a task below, make changes, and delete them when you are done!
    </h2>
    <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input 
        type="text" 
        className ="form-control" 
        value={description}
        onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success" placeholder = "Enter task here..."> Add </button>
    </form>
</Fragment>


);
};

export default InputTodo;