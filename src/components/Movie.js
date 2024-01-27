import Movies from "./Movies"
import App from "../App"


// the component function
const Movie = (props) => {

    //The Components Returned JSX
    return(
    <div className="movie"> 
        <img src={props.img} />
            <h1>{props.name}</h1>
            <div>
                <b>Year:</b>{props.year}
            </div>
            <div>
                <b>Rating:</b>{props.rating}
            </div>
    </div>
    )
}



// export the component
export default Movie