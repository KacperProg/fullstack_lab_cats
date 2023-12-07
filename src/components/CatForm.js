const CatForm = ({handleFormChange}) => {
    return (
        <>
            <form>
                <h3>Submit some text</h3>
                <label htmlFor="cat-text"></label>
                <input
                    id="cat-text" 
                    name="cat-text"
                    type="text"
                    placeholder="Enter message"
                    onChange={handleFormChange}
                /> 
            </form>
        </>
      );
}
 
export default CatForm;