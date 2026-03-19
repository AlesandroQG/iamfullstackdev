import { Link } from "react-router-dom";
import InputCreate from "./InputCreate.jsx";

const Home = ({ data, createTask }) => {
    return (
        <>
            <h2>Lista de tareas</h2>
            <InputCreate createTask={createTask} />
            <ul>
                {data.map(item => (
                    <li key={item._id}>
                        <Link to={`/${item._id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default Home;