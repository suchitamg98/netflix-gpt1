import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black pl-12 ">
        <div className="mt-0 md:-mt-52 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList
          title={"Upcomming Movies"}
          movies={movies.nowPlayingMovies}
        />
        SecondaryContainer
      </div>
    )
  );
};
export default SecondaryContainer;
