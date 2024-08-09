export let getChapters = async (req, res) => {
    const url =
        "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18";
    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "2aeeaf4919msh914b74f103d762ap1712acjsna11b8e064fbe",
            "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error)
    }
}