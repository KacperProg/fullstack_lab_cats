import { useEffect, useState } from "react";

const CatContainer = () => {
    
    const [cat, setCat] = useState([]);

    const fetchCat = async (name) => {
        const response = await fetch(`https://cataas.com/cat ${name}`);
        const catData = response.json();
        setCat(catData);
    }

    useEffect(() => {
        fetchCat();
    }, [])

    return (
        <>
            <h2>This is the Cat Container</h2>
            <Cat/>
        </>
    );
}
 
export default CatContainer;