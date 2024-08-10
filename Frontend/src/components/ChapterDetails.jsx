import styles from "./ChapterDetails.module.css";
import axios from "axios";
import { Suspense, useContext, useEffect, useState } from "react";
import Verses from "./Verses";
import { BookContext } from "../store/BookStore";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
let baseURL = import.meta.env.VITE_BASE_URL;

function ChapterDetails() {
  let { chapterDetails, setVerses, setChapterDetails } =
    useContext(BookContext);
  let { id } = useParams();
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let getChapterDetails = async (id) => {
      setIsLoading(true);
      try {
        let chapter = await axios.get(`${baseURL}/chapter/${id}`);
        let verses = await axios.get(`${baseURL}/chapter/${id}/verses`);
        setChapterDetails(chapter.data);
        setVerses(verses.data);
        setIsLoading(false);
      } catch (err) {
        throw new Response("Error occured", {
          status: 500,
          statusText:
            "Some internal error occured! Please try again after some time.",
        });
      }
    };

    getChapterDetails(id);
  }, []);

  if (isLoading) return <Loader />;

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
