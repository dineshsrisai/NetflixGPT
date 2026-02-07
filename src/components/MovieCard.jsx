import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-52 pr-6 mb-5">
      <img
        className="rounded-lg cursor-pointer  w-full h-full object-cover"
        alt="movieimg"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
