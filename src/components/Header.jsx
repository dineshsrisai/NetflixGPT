import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className="absolute w-screen px-20 py-2 mx-10 z-10 flex justify-between font-sans">
      <img className="w-44 cursor-pointer" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 items-center">
          <button
            className="py-3 px-4 mx-4 bg-red-700 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Browse" : "GPT Search"}
          </button>
          <div className="relative cursor-pointer group">
            <img className="w-12 h-12" src={user?.photoUrl} alt="usericon" />
            <span
              className="absolute right-0 top-14 font-bold text-black px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap bg-white"
              onClick={handleSignOut}
            >
              Sign Out
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
