import React from "react";
import { Link } from "react-router-dom";
import "./TodoItem.css"

function TodoItem({id, isDone, content, createdDate, onUpdate, onDelete}) {
    function onChangeCheckBox() {
        onUpdate(id)
    }
    function onClickDelete() {
        onDelete(id)
    }

    return (
        <div className="TodoItem">
            <input className="ItemCheckbox" type="checkbox" checked = {isDone} onChange={onChangeCheckBox}></input>
            <Link to={`/todo/${id}`}className="ItemTitle">{content}</Link>
            <div className="ItemDate">{new Date(createdDate).toLocaleDateString()}</div>
            <button className="ItemBtn" onClick={onClickDelete}>삭제</button>
        </div>
    );
}

export default TodoItem;