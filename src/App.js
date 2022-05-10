import "./App.css";
import Todo from "./Todo";
import Post from "./Post";
import User from "./User";

import { useState } from "react";

function App() {
    console.log("render");
    const [count, setCount] = useState(0);
    const handleSelect = (e) => {
        e.preventDefault();
        setCount(e.target.value);
    };
    return (
        <div className="App">
            <form>
                <select onChange={handleSelect}>
                    <option value={0}>Tasks</option>
                    <option value={1}>Posts</option>
                    <option value={2}>Users</option>
                </select>
            </form>
            <div>
                {count === 0 ? <Todo /> : count === 1 ? <Post /> : <User />}
            </div>
        </div>
    );
}

export default App;
