import { useState, useContext } from "react";
import ListsContext from "../context/lists";
import DatePicker from "react-date-picker";

function TdlistEdit({ list, onSubmit }){
    const [title, setTitle] = useState(list.title);
    const [deadLine, setDeadLine] = useState(list.deadLine);

    const { editListById } = useContext(ListsContext);

    const handleSubmit = (event) =>{
        event.preventDefault();
        onSubmit();
        editListById(list.id, title, deadLine);
    };

    const handleChange = (event) =>{
        setTitle(event.target.value)
    };

    return (
        <div>
            <form className="tdlist-edit" onSubmit={handleSubmit}>
                <label>title:</label>
                <input className="input" value={title} onChange={handleChange}/>
                <label>deadline:</label>
                <DatePicker value={deadLine} onChange={ date => setDeadLine(date)}/>
                <button className="button is-primary">Save</button>
            </form>
        </div> 
    );    
}

export default TdlistEdit;