import { useNavigate } from "react-router-dom";
import styles from "./ChapterDetails.module.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { BookContext } from "../store/BookStore";

function Verses() {
  let navigate = useNavigate();

  let redirectToVerseDetails = (data) => {
    navigate(`/chapter/${data.chapter_number}/verse/${data.verse_number}`);
  };

  let { verses } = useContext(BookContext);

  return (
    <>
      <div style={{ height: "max-content" }}>
        <h2
          style={{ color: "orangered", textAlign: "center", fontWeight: "800" }}
          className="mt-4 mb-4"
        >
          Verses
        </h2>
        {verses.map((data) => (
          <div
            className={`${styles.verseCard} mt-3 mb-3`}
            key={data.id}
            onClick={() => {
              redirectToVerseDetails(data);
            }}
          >
            <div className="row w-100">
              <div
                className={`${styles.verseCol} col-3 `}
                style={{ color: "orangered" }}
              >
                <h6>VERSE {data.verse_number}</h6>
              </div>
              <div className={`${styles.verseCol} col-9 `}>
                {data.transliteration}
              </div>
            </div>
            <div className="row w-100">
              <div
                className={`${styles.verseCol} col-3 `}
                style={{ color: "orangered" }}
              >
                <h6>छंद {data.verse_number}</h6>
              </div>
              <div className={`${styles.verseCol} col-9 `}>{data.text}</div>
            </div>
            <div className={`${styles.customHr}`}></div>
          </div>
        ))}
      </div>
    </>
  );
}

Verses.propTypes = {
  id: PropTypes.any,
};

export default Verses;
