const CatButton = ({onButtonClick}) => {
    const handleButton = () => {
        deleteChocolate(chocolate.id) 
    }
    return (  
        <button onClick={handleButton}>Get a CAT</button>
    );
}
 
export default CatButton;