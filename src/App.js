import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import Movie from './components/Movie';

function App() {

  const movies = [
    {
      name: "The Shawshank Redemption",
      year: 1994,
      rating: 9.3,
      image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
    },
    {
      name: "The Godfather",
      year: 1972,
      rating: 9.2,
      image: "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg"
    },
    {
      name: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
      name: "12 Angry Men",
      year: 1957,
      rating: 8.9,
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg"
    },
    {
      name: "Schindler's List",
      year: 1993,
      rating: 8.9,
      image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    }
  ];

  console.log(movies)
  return (
    <div className="App">
      <Movies movies={movies}/>
    </div>
  );
}

export default App;



