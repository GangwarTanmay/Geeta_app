import express from "express";
import cors from "cors";
import { getChapters } from "./controller/getChapters.js";
import { getChapterDetails } from "./controller/getChapterDetails.js";
import { getVerses } from "./controller/getVerses.js";
import { getVerseDetails } from "./controller/getVerseDetails.js";
const app = express();

let port = process.env.PORT || 8080;

app.use(cors());

app.listen(port, () => {
    console.log(`Server started listening ${port}`);
})

app.get('/', getChapters)

app.get('/chapter/:id', getChapterDetails)

app.get('/chapter/:id/verses', getVerses)

app.get('/chapter/:chapter_id/verse/:verse_id', getVerseDetails)

app.get('/hello', (req, res) => {
    res.send("<h1>Hello Request received from frontend</h1>")
})