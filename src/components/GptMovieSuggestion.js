import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, MovieName } = useSelector((store) => store.gpt);
  if (!MovieName) return null;

  return (
    <div className="p-4 m-4 text-white bg-black bg-opacity-70">
      {MovieName.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
};
export default GptMovieSuggestion;
