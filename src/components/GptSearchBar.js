import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { model } from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  // search MOVIE IN TMDB

  const searchMovieTmdb = async (movie) => {
    console.log(movie);
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // console.log(searchText.current.value);
    const gptQuery =
      "Act as movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      " only give me names of 5 movies , comma separated like the example results given ahead.Example Result:Gadar,Don,Golmal,sholay,koi mil gaya";
    //console.log(gptQuery);
    try {
      const result = await model.generateContent(gptQuery);
      const response = await result.response;
      console.log(response);
      searchMovieTmdb();
      const gptMovies =
        response?.candidates[0]?.content?.parts[0]?.text.split(",");
      //console.log(getMovies[0]);
      const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(
        addGptMovieResult({ MovieName: gptMovies, movieResults: tmdbResults })
      );
    } catch {
      //console.log(error);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 rounded-lg col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
