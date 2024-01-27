import App from "../App"
import Movie from "./Movie"

// the component function
// the component function
const Movies = (props) => {

    //The Components Returned JSX
    return (
    <div className="movies">{props.movies.map((movie, i) => (
        <Movie
            key={i}
            img={movie.image}
            rating={movie.rating}
            name={movie.name}
            />
    ))}</div>
        )
}



// export the component
export default Movies