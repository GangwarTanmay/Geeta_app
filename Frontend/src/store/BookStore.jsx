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
});

function BookStore({ children }) {
  let [chapters, setChapters] = useState([]);
  let [chapterDetails, setChapterDetails] = useState("");
  let [verses, setVerses] = useState([]);
  let [descriptionData, setDescriptionData] = useState("");
  let [verseData, setVerseData] = useState([]);

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
