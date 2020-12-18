import React, { useState } from 'react'

const AddTodo = props => {
    const [userInput, setUserInput] = useState('')

    function handleAddTodo(e) {
        e.preventDefault()
        if (!userInput) return;
        props.addTodo(userInput)
        setUserInput('')
    }

    console.log(userInput)

    return (
        <form onSubmit={handleAddTodo}>
            <input
                placeholder="Add a todo!"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                maxLength='100'
            />
            <button>Submit</button>
        </form>
    )
    //The onSubmit will track the last button on the form. The last button when clicked will run the onSubmit value.
    //The onChange is tracking each typed in word. In this context, it is changing the state variable 'userInput' from an empty string to the value of what the user is typing.
    //The form is automatically refreshing the page. We add a e.preventDefault to stop the default action of form to refresh when the button is clicked.
    //We do not want users to enter in empty forms for us to track. We will prevent empty strings from being put into the 
}
export default AddTodo


//This is only concerned about typing in new data and clicking a button to submit this data and pass the data on to ToDo for storage. 