import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="px-6 font-sans">
      <h1 className="py-4 text-2xl font-bold">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
