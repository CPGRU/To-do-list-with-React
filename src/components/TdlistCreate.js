import { useState, useContext } from "react";
import DatePicker from "react-date-picker";
import ListsContext from "../context/lists";



function TdlistCreate(){
    const [title, setTitle] = useState('');
    const [deadLine, setDeadLine] = useState(new Date());

    const { createList } = useContext(ListsContext);

    const handleSubmit = (event) =>{
        event.preventDefault();
        createList(title, deadLine);
        setTitle('');
        setDeadLine(new Date())
    }
    
    const handleChange = (event) =>{
        setTitle(event.target.value)
    }

    return (
        <div className="tdlist-create">
            <h3>Add a To-Do-List</h3>
            <form onSubmit={handleSubmit}>
                <label>title:</label>
                <input className="input" value={title} onChange={handleChange}/>
                <label>deadline:</label>
                <DatePicker value={deadLine} onChange={date => setDeadLine(date)}/>
                <button className="button">create</button>
            </form>
        </div>
    )
}

export default TdlistCreate;