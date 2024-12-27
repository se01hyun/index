import React, {useState, useRef, useEffect} from "react";
import "./App.css"
import Header from "./Header";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

function Home() {
    useEffect(()=>{
        const rawData = localStorage.getItem('todo');
        if (!rawData) {
            return;
        }
        const localData = JSON.parse(rawData);
        if (localData.length === 0) {
            return;
        }
        localData.sort((a,b) => Number(b.id)-Number(a.id));
        idRef.current = localData[0].id + 1;
        setTodo(localData);
    }, [])

    const [todo, setTodo] = useState([]); // mockTodo -> []
    const idRef = useRef(0) // 3 -> 0 : mockTodo 없애면서 키값도 0

    function onCreate(content) {
        const newItem = {
            id: idRef.current,
            isDone: false,
            content: content,
            createdDate: new Date().getTime(),
        };

        let newTodo = [newItem, ...todo];
        setTodo(newTodo);
        localStorage.setItem('todo', JSON.stringify(newTodo))
        idRef.current += 1;
    }

    function onUpdate(targetId) {
        const newTodo = todo.map((item)=>
            item.id === targetId
            ? {...item, isDone: !item.isDone}
            : item
        )
        setTodo(newTodo)
        localStorage.setItem('todo', JSON.stringify(newTodo))
    }

    function onDelete(targetId) {
        const newTodo = todo.filter((item)=>item.id !== targetId)
        setTodo(newTodo)
        localStorage.setItem('todo', JSON.stringify(newTodo))
    }

    return (
        <div className="App">
            <Header></Header>
            <TodoEditor onCreate = {onCreate}></TodoEditor>
            <TodoList todo={todo} onUpdate = {onUpdate} onDelete = {onDelete}></TodoList>
        </div>
    );
}

export default Home;