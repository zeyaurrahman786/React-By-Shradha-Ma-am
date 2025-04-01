// Handling Click events -> onClick event 
function handleClick() {
    console.log("Button clicked");
}

// Handling Click events -> onDoubleClick event
function handleDoubleClick() {
    console.log("Button double clicked");
}


// Handling Non click events -> onMouseOver event
function handleMouseOver() {
    console.log("Mouse over event");
}

export default function Button () {
    return (
        <div>
            {/* Handling Click events -> onClick event */}
            <button onClick={handleClick}>Click me!</button>
            <button onDoubleClick={handleDoubleClick}>Double Click me!</button>


            {/* Handling Non click events -> onMouseOver event */}
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque quod dolor quidem animi accusamus vel alias ratione eligendi ex praesentium, odio id eveniet voluptatibus quibusdam, nisi aut fuga dignissimos saepe.</p>
        </div>
    );
}