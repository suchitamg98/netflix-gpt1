export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_small.jpg";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "kannada",
    name: "Kannada",
  },
];
