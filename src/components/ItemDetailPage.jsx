import { useNavigate } from "react-router-dom";

const ItemDetailPage = ({ item, onDelete }) => {
    const navigate = useNavigate();
    const deleteTask = async () => {
        await onDelete(item._id);
        navigate("/");
    };
    return (
        <>
            <h3>{item.title}</h3>
            <p>Completed: {`${item.completed ?? "false"}`}</p>
            <button onClick={() => deleteTask()}>Eliminar</button>
        </>
    );
};

export default ItemDetailPage;