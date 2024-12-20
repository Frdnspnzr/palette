"use client";

import { getFactor } from "@/lib/utility";
import chroma from "chroma-js";
import classNames from "classnames";
import styles from "./color.module.css";

interface SelectedProps {
  selected?: boolean;
  name: string;
  select: () => void;
  color: {
    r: number;
    g: number;
    b: number;
  };
}

export default function Color({
  selected = false,
  name,
  color,
  select,
}: SelectedProps) {
  const col = chroma(`rgb(${color.r}, ${color.g}, ${color.b})`);
  const light = col.luminance() > 0.3;
  const style = {
    "--color": col.css(),
    "--factor": getFactor(name),
    "--text-1": light ? "var(--gray-12)" : "var(--gray-1)",
    "--text-2": light ? "var(--gray-7)" : "var(--gray-4)",
  } as React.CSSProperties;
  return (
    <button
      className={classNames("card unstyled", styles.color, {
        ["active"]: selected,
      })}
      onClick={select}
      style={style}
    >
      <h2>{name}</h2>
      <div className={styles.meta}>
        <ul>
          <li>{col.hex()}</li>
          <li>{col.css()}</li>
          {selected && (
            <>
              <li>{col.css("hsl")}</li>
              <li>{col.css("lab" as any)}</li>
            </>
          )}
        </ul>
      </div>
    </button>
  );
}
