import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constant";

export default function Stats({ text }) {
  const numberOfCharacters = text.length;
  const numberOfWords = text.trim().split(/\s+/).length;
  const instagramCharactersLeft = INSTAGRAM_MAX_CHARACTERS - numberOfCharacters;
  const facebookCharactersLeft = FACEBOOK_MAX_CHARACTERS - numberOfCharacters;

  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={instagramCharactersLeft} label="Instagram" />
      <Stat number={facebookCharactersLeft} label="Facebook" />
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
