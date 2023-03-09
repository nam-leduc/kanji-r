import KANJI_DETAIL from "./kanjiDetail.json";

export function createKanjiDataForEachPage(...cells) {
  let cols = cells.map((kanji) => {
    let kanjiDetail = {
      mean: kanji,
      examples: [],
    };
    if (kanji in KANJI_DETAIL) {
      kanjiDetail = KANJI_DETAIL[kanji];
    }

    const meaning = kanjiDetail.mean;
    const examples = kanjiDetail.examples;
    const onyomi = kanjiDetail.on != null ? kanjiDetail.on : "N/A";
    const kunyomi = kanjiDetail.kun != null ? kanjiDetail.kun : "N/A";

    const value = kanji;
    let remembered = localStorage.getItem(kanji);
    if (remembered == null || remembered == "false") {
      remembered = false;
    }

    return { value, kanji, remembered, meaning, examples, onyomi, kunyomi };
  });
  return cols;
}
