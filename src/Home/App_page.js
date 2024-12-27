import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Todo from './pages/Todo'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/todo/:id' element={<Todo></Todo>}></Route>
            </Routes>
            <div>
                <Link to={'/'}>Home</Link><br></br>
                <Link to={'/todo'}>Todo</Link>
            </div>
        </div>
    );
};

export default App;