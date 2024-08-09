import { Suspense, useContext, useEffect } from "react";
import styles from "./VerseDetails.module.css";
import axios from "axios";
import { filterData } from "../utility/filterData";
import { useLoaderData } from "react-router-dom";
import { BookContext } from "../store/BookStore";
import Loader from "./Loader";

function VerseDetails() {
  let { descriptionData, setDescriptionData, verseData, setVerseData } =
    useContext(BookContext);

  let result = useLoaderData();

  useEffect(() => {
    setDescriptionData({
      englishDesc: result.description.englishDesc,
      hindiDesc: result.description.hindiDesc,
    });
    setVerseData(result.verseData.data);
  }, []);

  return (
    <Suspense fallback={<Loader></Loader>}>
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
    </Suspense>
  );
}

export default VerseDetails;

export let getVerseDetails = async ({ params }) => {
  let { chapter_number, verse_number } = params;
  try {
    let result = await axios.get(
      `http://localhost:8080/chapter/${chapter_number}/verse/${verse_number}`
    );
    let description = await filterData(result.data.translations);
    return { verseData: result, description: description };
  } catch (err) {
    throw new Response("Error occured", {
      status: 500,
      statusText:
        "Some internal error occured! Please try again after some time.",
    });
  }
};
