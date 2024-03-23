import { useEffect, useContext } from "react";
import TdLists from "./components/TdLists";
import TdlistCreate from "./components/TdlistCreate";
import ListsContext from "./context/lists";

function App(){
    const { fetchLists } = useContext(ListsContext);
    useEffect(() => {
        fetchLists();
    }, []);

    return (
        <div className="app">
            <h1>Need to do:</h1>
            <TdLists />
            <TdlistCreate />
        </div>
    );
}

export default App;