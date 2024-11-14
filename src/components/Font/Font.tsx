import { getFactor } from "@/lib/utility";
import classNames from "classnames";
import Link from "next/link";
import { CSSProperties } from "react";
import FontExamples from "../FontExamples/FontExamples";
import FontVariants from "../FontVariants/FontVariants";
import styles from "./font.module.css";

interface FontProps {
  name: string;
  files: { name: string; format: string; bold: boolean; italic: boolean }[];
  url: string;
  variants?: { name: string; settings: CSSProperties }[];
}

export default function Font({ name, files, url, variants = [] }: FontProps) {
  const style = {
    fontFamily: name,
    "--factor": getFactor(name),
  } as React.CSSProperties;
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
      <div className={classNames("card", styles.card)} style={style}>
        <h2 className={styles.name}>{name}</h2>
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
