import { CSSProperties } from "react";

const exampleGlyphs = "I J K L i j k l 1 2 3 4 ä ö ü Ä Ö Ü ß ẞ œ Å & % @ § ⅜ ╦";
const exampleSentence =
  "Deine Gewalt ist nur ein stummer Schrei nach Liebe. Deine Springerstiefel sehnen sich nach Zärtlichkeit.";

export default function FontExamples({
  settings = {},
}: {
  settings?: CSSProperties;
}) {
  return (
    <>
      <p style={settings}>{exampleGlyphs}</p>
      <p style={settings}>{exampleSentence}</p>
    </>
  );
}
