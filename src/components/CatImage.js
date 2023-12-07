import '../index.css'
const CatImage = ({cat}) => {

    return ( 
        <div className="image-box">
            <img src={cat} alt="A Cat"/>
        </div>
     );
}
 
export default CatImage;