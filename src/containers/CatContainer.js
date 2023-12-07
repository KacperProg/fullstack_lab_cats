import { useEffect, useState } from "react";
import CatButton from "../components/CatButton";
import CatImage from "../components/CatImage";
import CatForm from "../components/CatForm";

const CatContainer = () => {
    
    const [cat, setCat] = useState(null);
    const[catType,setCatType] = useState("/cat")
    const[catMessage, setCatMessage] = useState(null)
    const[catTag, setCatTag] = useState(null)


    const fetchCat = async () => {
        const response = await fetch(`https://cataas.com${catType}`, {
                method: "GET",
                headers: {"Content-Type": "application/json"}
          });
        const catData = await response.blob();
        console.log(URL.createObjectURL(catData));
        setCat(URL.createObjectURL(catData));
    }

    const handleCatTypeChange = (event) => {
        setCatType(event.target.value);
    }; 

    const handleFormChange = (event) => {
        setCatMessage(event.target.value);
        if (catType=="/cat/says"){
                setCatType(`/cat/says/${event.target.value}`)
        }
    };

    useEffect(() => {
        fetchCat();
    }, [catType, catMessage, catTag])


    return (
        <>
            <h2>This is the Cat Container</h2>
            <nav>
                 <select value={catType} onChange={handleCatTypeChange}>
                    <option>Select a cat type</option>
                    <option value="/cat">Cat image</option>
                    <option value="/cat/gif">Cat Gif</option>
                    <option value="/cat/says">Cat Text</option>
                </select>
                <CatForm handleFormChange = {handleFormChange}/>
                <CatButton onButtonClick = {fetchCat}/>
            </nav>
            {cat ? <CatImage cat = {cat}/> : <p>Loading cat...</p>}
            
            
            
        </>
    );
}
 
export default CatContainer;