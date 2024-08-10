import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chapters from "./components/Chapters.jsx";
import Homepage from "./components/Homepage.jsx";
import Banner from "./components/Banner.jsx";
import ChapterDetails from "./components/ChapterDetails.jsx";
import VerseDetails from "./components/VerseDetails.jsx";
import About from "./components/About.jsx";
import ErrorElement from "./components/ErrorElement.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Homepage></Homepage>
            <Banner></Banner>
            <Chapters></Chapters>
          </>
        ),
        // loader: () => fetchChapters(),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/chapter/:id",
        errorElement: <ErrorElement />,
        element: <ChapterDetails />,
      },
      {
        path: "/chapter/:chapter_number/verse/:verse_number",
        errorElement: <ErrorElement />,
        element: <VerseDetails></VerseDetails>,
      },
      {
        path: "*",
        errorElement: <ErrorElement></ErrorElement>,
        element: <></>,
        loader: () => {
          throw new Response("Page not found", {
            status: 404,
            statusText:
              "The page you are looking for might have been removed, had its name changed or is temporarily unavailable",
          });
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
