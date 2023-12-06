import { useEffect, useState } from "react";
import CatButton from "../components/CatButton";
import CatImage from "../components/CatImage";

const CatContainer = () => {
    
    const [cat, setCat] = useState(null);

    const fetchCat = async () => {
        const response = await fetch(`https://cataas.com/cat`, {
                method: "GET",
                headers: {"Content-Type": "application/json"}
          });
        console.log(response)
        const catData = await response.blob();
        console.log(URL.createObjectURL(catData));
        setCat(URL.createObjectURL(catData));
    }

    useEffect(() => {
        fetchCat();
    }, [])

    

    return (
        <>
            <h2>This is the Cat Container</h2>
            {cat ? <CatImage cat = {cat}/> : <p>Loading cat...</p>}
            <CatButton onButtonClick = {fetchCat}/>
            {/* <Cat cat = {cat}/> */}
        </>
    );
}
 
export default CatContainer;