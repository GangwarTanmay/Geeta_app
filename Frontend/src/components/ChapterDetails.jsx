import { useLoaderData } from "react-router-dom";
import styles from "./ChapterDetails.module.css";
import axios from "axios";
import { Suspense, useContext, useEffect } from "react";
import Verses from "./Verses";
import { BookContext } from "../store/BookStore";
import Loader from "./Loader";

function ChapterDetails() {
  let data = useLoaderData();

  let { chapterDetails, setVerses, setChapterDetails } =
    useContext(BookContext);

  useEffect(() => {
    setChapterDetails(data.chapterData);
    setVerses(data.versesData);
  }, []);

  return (
    <Suspense fallback={<Loader></Loader>}>
      {chapterDetails && (
        <div className={`container ${styles.outer}`}>
          <div className={`${styles.innerDiv} mt-4 mb-4`}>
            <h2 className={`${styles.h5}`}>CHAPTER {chapterDetails.id}</h2>
            <h2 className={`${styles.h2}`}>{chapterDetails.name_meaning}</h2>
            <h2 className={`${styles.h2_Hindi}`}>({chapterDetails.name})</h2>
            <div className={`${styles.description}`}>
              <p>{chapterDetails.chapter_summary}</p>
            </div>
            <div className={`${styles.description}`}>
              <p>{chapterDetails.chapter_summary_hindi}</p>
            </div>
          </div>
          <div className={`${styles.customDiv}`}></div>
          <Verses></Verses>
        </div>
      )}
    </Suspense>
  );
}
export default ChapterDetails;

export let getChapterDetails = async ({ params }) => {
  try {
    let { id } = params;
    let chapter = await axios.get(`http://localhost:8080/chapter/${id}`);
    let verses = await axios.get(`http://localhost:8080/chapter/${id}/verses`);
    return { chapterData: chapter.data, versesData: verses.data };
  } catch (err) {
    throw new Response("Error occured", {
      status: 500,
      statusText:
        "Some internal error occured! Please try again after some time.",
    });
  }
};
