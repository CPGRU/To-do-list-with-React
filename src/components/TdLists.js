import { useContext } from "react";
import ListsContext from "../context/lists";
import TdlistShow from "./TdlistShow";

function TdLists(){
    const { lists } = useContext(ListsContext);

    const renderedLists = lists.map((list)=>{
        return <TdlistShow key={list.id} list={list} />
    });

    return <div className="tdlist-list">{renderedLists}</div>
}

export default TdLists;