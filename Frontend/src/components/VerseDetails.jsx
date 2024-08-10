import { useContext, useEffect, useState } from "react";
import styles from "./VerseDetails.module.css";
import axios from "axios";
import { filterData } from "../utility/filterData";
import { useParams } from "react-router-dom";
import { BookContext } from "../store/BookStore";
import Loader from "./Loader";
let baseURL = "https://geeta-app-backend.onrender.com";

function VerseDetails() {
  let { descriptionData, setDescriptionData, verseData, setVerseData } =
    useContext(BookContext);

  let params = useParams();
  let [isLoading, setIsLoading] = useState(false);

  let getVerseDetails = async (params) => {
    let { chapter_number, verse_number } = params;
    try {
      setIsLoading(true);
      let result = await axios.get(
        `${baseURL}/chapter/${chapter_number}/verse/${verse_number}`
      );
      let description = await filterData(result.data.translations);
      setDescriptionData({
        englishDesc: description.englishDesc,
        hindiDesc: description.hindiDesc,
      });
      setVerseData(result.data);
      setIsLoading(false);
    } catch (err) {
      throw new Response("Error occured", {
        status: 500,
        statusText:
          "Some internal error occured! Please try again after some time.",
      });
    }
  };

  useEffect(() => {
    getVerseDetails(params);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className={`${styles.outer} container`}>
      <div className={`${styles.innerDiv}`}>
        <h2>
          BG {verseData.chapter_number}.{verseData.verse_number}
        </h2>
        <h3>{verseData.text}</h3>
        <div className={`${styles.shlok}`}>{verseData.transliteration}</div>
        <div className={`${styles.text}`}>{verseData.word_meanings}</div>
        <img src="/images/hr.svg" alt="" className={`${styles.customHr}`} />
        <h2>Translation</h2>
        <div className={`${styles.text}`}>{descriptionData.englishDesc}</div>
        <div className={`${styles.text}`}>{descriptionData.hindiDesc}</div>
      </div>
    </div>
  );
}

export default VerseDetails;
