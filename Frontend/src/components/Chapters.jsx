import { useContext, useEffect } from "react";
import axios from "axios";
import ChapterCard from "./ChapterCard";
import { BookContext } from "../store/BookStore";
import Loader from "./Loader";

function Chapters() {
  let { chapters, setChapters, isLoading, setIsLoading, baseURL, options } =
    useContext(BookContext);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        setIsLoading(true);
        let result = await axios.get(
          `${baseURL}/chapters/?skip=0&limit=18`,
          options
        );
        setChapters(result.data);
        setIsLoading(false);
      } catch (err) {
        throw new Response("Error occured", {
          status: 500,
          statusText:
            "Some internal error occured! Please try again after some time.",
        });
      }
    };
    fetchChapters();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="d-flex align-items-center mt-5">
        <h3 className="chapters-heading">Chapters</h3>
        <div className="headingLine"></div>
      </div>

      <div className="row mt-5">
        {chapters.length &&
          chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter}></ChapterCard>
          ))}
      </div>
    </div>
  );
}

export default Chapters;
