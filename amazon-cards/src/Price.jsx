export default function Price ({oldPrice, newPrice}) {
    let oldStyles = {
        textDecoration: "line-through",
        color: "gray",
    };

    let newStyles = {
        fontWeight: "bold",
    };

    let styles = {
        backgroundColor: "#e0c367",
        height: "31.5px",
        width: "200px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    };

    return (
        <div style={styles}>
            {/* <p>oldPrice</p> */}
            {/* <p>newPrice</p> */}
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}