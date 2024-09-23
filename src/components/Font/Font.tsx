import classNames from "classnames";
import Link from "next/link";
import { CSSProperties } from "react";
import FontExamples from "../FontExamples/FontExamples";
import FontVariants from "../FontVariants/FontVariants";
import style from "./font.module.css";

interface FontProps {
  name: string;
  files: { name: string; format: string; bold: boolean; italic: boolean }[];
  url: string;
  variants?: { name: string; settings: CSSProperties }[];
}

export default function Font({ name, files, url, variants = [] }: FontProps) {
  return (
    <>
      <style>
        {files.map((f) => (
          <FontFace
            key={f.name}
            name={name}
            filename={f.name}
            format={f.format}
            bold={f.bold}
            italic={f.italic}
          />
        ))}
      </style>
      <div
        className={classNames("card", style.card)}
        style={{ fontFamily: name }}
      >
        <h2>{name}</h2>
        <p>
          <Link href={url}>Source</Link>
        </p>
        <FontExamples />
        {variants.length > 0 && (
          <FontVariants variants={variants} fontName={name} />
        )}
      </div>
    </>
  );
}

function FontFace({
  name,
  filename,
  format,
  bold = false,
  italic = false,
}: {
  name: string;
  filename: string;
  format: string;
  bold?: boolean;
  italic?: boolean;
}) {
  return (
    <>{`@font-face { font-family: ${name}; src: url(/fonts/${filename})
  format(${format}); ${bold ? "font-weight: 700;" : ""} ${
      italic ? "font-style: italic;" : ""
    } }`}</>
  );
}
