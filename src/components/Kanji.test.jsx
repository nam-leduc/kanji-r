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
  it("change to not remember status", async () => {
    // ARRANGE
    render(<Kanji defaultCell={getKanji()} />);

    // ACT
    await userEvent.click(screen.getByText("☆"));

    // ASSERT
    expect(screen.getByRole("favorite")).toHaveTextContent("★");
  });

  it("change to remembered status", async () => {
    // ARRANGE
    render(<Kanji defaultCell={getKanji()} />);

    // ACT
    await userEvent.click(screen.getByText("☆"));
    await userEvent.click(screen.getByText("★"));

    // ASSERT
    expect(screen.getByRole("favorite")).toHaveTextContent("☆");
  });
});
