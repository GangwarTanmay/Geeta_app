import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ChapterCard from "./ChapterCard";
import { BookContext } from "../store/BookStore";
import Loader from "./Loader";
let baseURL = "https://geeta-app-backend.onrender.com";

function Chapters() {
  let { chapters, setChapters } = useContext(BookContext);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        setIsLoading(true);
        let result = await axios.get(baseURL);
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
