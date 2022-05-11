import "./App.css";
import Todo from "./Todo";
import Post from "./Post";
import User from "./User";

import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const handleSelect = (e) => {
        e.preventDefault();
        setCount(Number(e.target.value));
    };
    let content = <Todo />;
    console.log(count);
    if (count === 1) {
        content = <Post />;
    }
    if (count === 2) {
        content = <User />;
    }
    return (
        <div className="App">
            <form>
                <label>Select Category</label>
                <select onChange={handleSelect}>
                    <option value={0}>Tasks</option>
                    <option value={1}>Posts</option>
                    <option value={2}>Users</option>
                </select>
            </form>
            <div>{content}</div>
        </div>
    );
}

export default App;
