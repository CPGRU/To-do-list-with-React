import { useState, useContext } from "react";
import ListsContext from "../context/lists";
import TdlistEdit from "./TdlistEdit";
import CountDown from "./CountDown";

function TdlistShow({ list }){
    const [showEdit, setShowEdit] = useState(false);
 
    const { deleteListById } = useContext(ListsContext);

    const handleDeleteClick = () =>{
        deleteListById(list.id)
    };

    const handleEditClick = () =>{
        setShowEdit(!showEdit)
    };

    const handleSubmit = () =>{
        setShowEdit(false);
    };
    
    const dateStrToObj = () =>{
        let timeStamp = Date.parse(list.deadLine);
        return new Date(timeStamp);
        
    };

    let content = (
        <div>
            <h3>{list.title}</h3> 
            <h6>{dateStrToObj(list.deadLine).toDateString()}</h6>
            <div><CountDown deadLine={list.deadLine}/></div>
        </div>
    )

    if(showEdit){
        content = <TdlistEdit list={list} onSubmit={handleSubmit}/>;
    };

    return (
        <div className="tdlist-show">
            <img alt="lists" src= {`https://picsum.photos/seed/${list.id}/300/200`}/>
            {content}
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default TdlistShow;