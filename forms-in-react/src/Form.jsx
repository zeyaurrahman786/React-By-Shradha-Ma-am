// import { useState } from "react"

// export default function Form() {

//     let [fullName, setFullName] = useState("")
//     let [userName, setUserName] = useState("")

//     const handleNameChange = (event) => {
//         // console.log(event.target.value)
//         setFullName(event.target.value)
//     }

//     const handleUserNameChange = (event) => {
//         // console.log(event.target.value)
//         setUserName(event.target.value)
//     }

//     return (
//         <form>
//             <label htmlFor="fullName">Full Name :- </label>
//             <input
//                 placeholder="Enter Full Name"
//                 type="text"
//                 value={fullName}
//                 onChange={handleNameChange}
//                 id="fullName"
//             />
//             <br /> <br />
//             <label htmlFor="userName">User Name :- </label>
//             <input
//                 placeholder="Enter User Name"
//                 type="text"
//                 value={userName}
//                 onChange={handleUserNameChange}
//                 id="userName"
//             />
//             <button>Submit</button>
//         </form>
//     )
// }









import { useState } from "react"

export default function Form() {

    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: ""
    })

    const handleInputChange = (event) => {
        // let fieldName = event.target.name
        // let newValue = event.target.value
        // console.log(newValue);

        setFormData((currData) => {
            // currData[fieldName] = newValue;
            return {...currData, [event.target.name]: event.target.value};
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Reset form data
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name :- </label>
            <input
                placeholder="Enter Full Name"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                id="fullName"
                name="fullName"
            />
            
            <br /> <br />

            <label htmlFor="userName">User Name :- </label>
            <input
                placeholder="Enter User Name"
                type="text"
                value={formData.userName}
                onChange={handleInputChange}
                id="userName"
                name="userName"
            />
            <br /> <br />

            <label htmlFor="password">Password :- </label>
            <input
                placeholder="Enter User Name"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                id="password"
                name="password"
            />
            <button>Submit</button>
        </form>
    )
}