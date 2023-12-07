import { useState } from "react";

const CatForm = ({handleFormChange}) => {
    
    const [message,setMessage] = useState("")

    const handleFormSubmit = (event) => {   
        event.preventDefault();
        handleFormChange(message);
        console.log(message);
    }

    const handleChange = (event) => {
        let copiedMessage = event.target.value;
        setMessage(copiedMessage);
    }  

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <h3>Submit some text</h3>
                <label htmlFor="cat-text"></label>
                <input
                    id="cat-text" 
                    name="cat-text"
                    type="text"
                    placeholder="Enter message"
                    onChange={handleChange}
                /> 
                <input type="submit" value="Add Message"/>
            </form>
        </>
      );
}
 
export default CatForm;