// this function will filter english and hindi data from the translation array

export let filterData = async (translationsArray) => {

    let englishDesc = "";
    let hindiDesc = "";

    translationsArray.forEach(element => {
        if (
            element.language === "english" &&
            element.author_name === "Swami Sivananda"
        ) {
            englishDesc = element.description;
        }
        if (
            element.language === "hindi" &&
            element.author_name === "Swami Ramsukhdas"
        ) {
            hindiDesc = element.description;
        }
    });

    return { englishDesc, hindiDesc }
}