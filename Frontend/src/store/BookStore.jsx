import { createContext, useState } from "react";
import PropTypes from "prop-types";

export let BookContext = createContext({
  chapters: [],
  chapterDetails: "",
  verses: [],
  descriptionData: "",
  verseData: [],
  setChapters: () => {},
  setChapterDetails: () => {},
  setVerses: () => {},
  setDescriptionData: () => {},
  setVerseData: () => {},
  options: {},
  baseURL: "",
  isLoading: false,
  setIsLoading: () => {},
});

function BookStore({ children }) {
  let [chapters, setChapters] = useState([]);
  let [chapterDetails, setChapterDetails] = useState("");
  let [verses, setVerses] = useState([]);
  let [descriptionData, setDescriptionData] = useState("");
  let [verseData, setVerseData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  const baseURL = "https://bhagavad-gita3.p.rapidapi.com/v2";

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2aeeaf4919msh914b74f103d762ap1712acjsna11b8e064fbe",
      "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  return (
    <BookContext.Provider
      value={{
        chapters,
        setChapters,
        chapterDetails,
        setChapterDetails,
        verses,
        setVerses,
        descriptionData,
        setDescriptionData,
        verseData,
        setVerseData,
        options,
        baseURL,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

BookStore.propTypes = {
  children: PropTypes.any,
};

export default BookStore;
