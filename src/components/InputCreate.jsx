import { useEffect, useState, useRef } from "react";

const InputCreate = ({ createTask }) => {
    const [title, setTitle] = useState("");
    const inputRef = useRef(null);
    const onSubmit = async (e) => {
        e.preventDefault();
        if (title.trim() !== "") {
            if (await createTask(title)) {
                setTitle("");
            }
        }
    };
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <form onSubmit={onSubmit}>
            <input type="text" id="tarea" placeholder="Título de la tarea" ref={inputRef} value={title} onChange={() => setTitle(inputRef.current.value)} required />
            <button type="submit">Guardar</button>
        </form>
    );
};

export default InputCreate;