import styles from "./ChapterCard.module.css";
import { MdFormatListBulleted } from "react-icons/md";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./Loader";

function ChapterCard({ chapter }) {
  let navigate = useNavigate();

  let getChapterDetails = async (id) => {
    await navigate(`/chapter/${id}`);
  };

  return (
    <Suspense fallback={<Loader></Loader>}>
      <div className="col-lg-6 col-sm-12 mt-4">
        <div
          className={`${styles.outer} shadow-lg `}
          onClick={() => getChapterDetails(chapter.id)}
        >
          <h5 className={`${styles.chapterNumber}`}>Chapter {chapter.id}</h5>
          <h4 className={`${styles.chapterName}`}>
            {chapter.name_meaning + " ( " + chapter.name + " ) "}
          </h4>
          <div className={`${styles.description}`}>
            <p>{chapter.chapter_summary}</p>
          </div>
          <div className={`${styles.description} mt-2`}>
            <p>{chapter.chapter_summary_hindi}</p>
          </div>
          <div className="mt-2 d-flex align-items-center">
            <div className={`${styles.versesLogo} d-flex align-items-center`}>
              <MdFormatListBulleted />
            </div>
            <h6 className={`${styles.verses} mt-2 ms-3`}>
              {chapter.verses_count} Verses
            </h6>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

ChapterCard.propTypes = {
  chapter: PropTypes.any,
};

export default ChapterCard;
