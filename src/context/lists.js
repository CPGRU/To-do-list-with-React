import { createContext, useState, useCallback } from "react";
import axios from "axios";

const ListsContext = createContext();

function Provider({ children }){
    const [lists, setLists] = useState([]);

    const fetchLists = useCallback (async ()=> {
        const response = await axios.get('http://localhost:3001/lists');

        setLists(response.data);
    }, []);

    const editListById = async (id, newTitle, newDeadLine) =>{
        const response = await axios.put(`http://localhost:3001/lists/${id}`,{
            title: newTitle,
            deadLine: newDeadLine
        });

        const updatedLists = lists.map((list)=>{
            if(list.id === id) {
                return {...list, ...response.data}
            }
            return list
        });
        setLists(updatedLists)
    };

    const deleteListById = async (id) =>{
        await axios.delete(`http://localhost:3001/lists/${id}`);

        const updatedLists = lists.filter((list)=>{
            return list.id !== id
        });
        setLists(updatedLists)
    };

    const createList = async(title, deadLine) =>{
        const response = await axios.post('http://localhost:3001/lists',{
            title,
            deadLine,
        })
        
        const updatedLists = [
            ...lists, 
            response.data
        ];
        setLists(updatedLists)       
    };

    const valueToShare = {
        lists,
        fetchLists,
        editListById,
        deleteListById,
        createList
    };

    return (
        <ListsContext.Provider value={valueToShare}>
            { children }
        </ListsContext.Provider>
    )       
}

export { Provider };
export default ListsContext;
