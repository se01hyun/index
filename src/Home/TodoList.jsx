import React, {useState} from "react";
import TodoItem from "./TodoItem";

function TodoList({todo, onUpdate, onDelete}){
    const [search, setSearch] = useState("");
    function onChangeSearch(e){
        setSearch(e.target.value);
    }

    function getSearchResult() {
        return search === "" ? todo:todo.filter((item)=>item.content.includes(search));
    }
    
    return (
        <div className="TodoList">
            <h3>TodoList</h3>
            <input className = "searchBar" placeholder="검색어를 입력하세요" onChange={onChangeSearch}></input>
            <div>
                {/* {todo.map((item)=>(
                    <TodoItem key={item.id} {...item} />
                ))} */}
                {getSearchResult().map((item)=>(
                    <TodoItem key={item.id} {...item} onUpdate = {onUpdate} onDelete = {onDelete}/>
                ))}
                {/* <TodoItem></TodoItem>
                <TodoItem></TodoItem>
                <TodoItem></TodoItem> */}
            </div>
        </div>
    );
}

export default TodoList;