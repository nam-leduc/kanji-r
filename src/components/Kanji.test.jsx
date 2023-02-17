import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Kanji } from "./Kanji";
import MEANING from "./kanjiMeaning";

function getKanji() {
  const kanji = "一";
  const meaning = kanji in MEANING ? MEANING[kanji].Mean : kanji;
  const value = kanji;
  const remembered = false;
  return { value, kanji, remembered, meaning, note: "" };
}

describe("Test Kanji", () => {
  it("test toggle remember", async () => {
    // ARRANGE
    render(<Kanji defaultCell={getKanji()} />);

    // ACT
    await userEvent.click(screen.getByText("☆"));
    expect(screen.getByRole("favorite")).toHaveTextContent("★");

    await userEvent.click(screen.getByText("★"));
    expect(screen.getByRole("favorite")).toHaveTextContent("☆");
  });

  it("test toggle kanji and meaning", async () => {
    // ARRANGE
    render(<Kanji defaultCell={getKanji()} />);

    // ACT
    await userEvent.click(screen.getByText(getKanji().kanji));
    expect(screen.getByText(getKanji().meaning)).toBeInTheDocument();

    await userEvent.click(screen.getByText(getKanji().meaning));
    expect(screen.getByText(getKanji().kanji)).toBeInTheDocument();
  });
});
