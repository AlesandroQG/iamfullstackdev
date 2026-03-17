const ItemDetailPage = ({ item }) => {
    return (
        <>
            <h3>{item.title}</h3>
            <p>Compled: {`${item.completed ?? "false"}`}</p>
        </>
    );
};

export default ItemDetailPage;