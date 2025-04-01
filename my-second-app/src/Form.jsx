function handleFormSubmit(event) {
    // Prevent form submission 
    event.preventDefault()
    console.log('Form Submitted')
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <input placeholder="Write Something..." />
      {/* <button onClick={handleFormSubmit}>Submit</button> */}
        <button>Submit</button>
    </form>
  )
}