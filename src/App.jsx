import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import ItemDetailPage from "./components/ItemDetailPage.jsx";

const App = () => {
    const [data, setData] = useState(null);
    const [update, setUpdate] = useState(false);
    const urlApi = import.meta.env.VITE_APP_API_URL || "http://localhost:3000";
    const fetchData = async () => {
        try {
            const response = await fetch(urlApi);
            const resData = await response.json();
            setData(resData);
        } catch (error) {
            console.error(error);
        }
    };
    const createTask = async (title) => {
        const payload = {title, completed: false};
        try {
            const response = await fetch(`${urlApi}/create`, {
                method: 'POST', // Método HTTP
                headers: {
                    'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                },
                body: JSON.stringify(payload), // Convertimos el payload de JS a JSON
            });
            const result = await response.json();
            console.log(result);
            setUpdate(!update);
            return result;
        } catch (error) {
            console.error(error);
        }
    };
    const deleteTask = async (id) => {
        try {
            const response = await fetch(`${urlApi}/id/${id}`, {
                method: 'DELETE', // Método HTTP
                headers: {
                    'Content-Type': 'application/json', // Indicamos que el contenido es JSON
                }
            });
            const result = await response.json();
            console.log(result);
            setUpdate(!update);
            return true;
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [update])
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Inicio</Link>
                </nav>
                {data === null
                    ? (<div>Cargando...</div>)
                    :
                    <Routes>
                        <Route path="/" element={<Home data={data} createTask={createTask} />} />
                        
                        {data.map(item => (
                            <Route key={item._id} path={`/${item._id}`} element={<ItemDetailPage item={item} onDelete={deleteTask} />} />
                        ))
                        }
                    </Routes>
                }
            </div>
        </Router>
    );
};

export default App;