import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = 'http://localhost:3003';

function Todo() {
    const {id} = useParams();

    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get(`${BASE_URL}/todos`)
        .then(response => {
            setData(response.data[id].contents);
        });
    }, []);

    return (
        <div>
            <div>Todo 페이지입니다</div>
            <div>{id}번 할 일</div>
            <div>{data}</div>
        </div>
    )
}

export default Todo;