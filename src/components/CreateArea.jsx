import React, { useState } from "react";

function CreateArea(props) {

    const [entry, handleEntry] = useState({
        title: "",
        content: ""
    })



    function onChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        handleEntry((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function onclick(event) {
        props.add(entry, handleEntry);
        handleEntry({ title: "", content: "" });
        event.preventDefault();
    }
    return (
        <div>
            <form>
                <input onChange={onChange} name="title" placeholder="Title" value={entry.title} />
                <textarea onChange={onChange} name="content" placeholder="Take a note..." rows="3" value={entry.content} />
                <button onClick={onclick} name="">Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
