"use client";

import Color from "@/components/Color/Color";
import classNames from "classnames";
import { useState } from "react";
import data from "./colors.json";
import styles from "./colorspage.module.css";

const groups = getAllGroups();

export default function ColorsPage() {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [filter, setFilter] = useState<string | undefined>(undefined);

  const changeFilter = (f: string) => {
    if (filter === f) {
      setFilter(undefined);
    } else {
      setFilter(f);
    }
  };

  return (
    <>
      <div className={styles.filter}>
        {groups.map((g) => (
          <button
            onClick={() => changeFilter(g)}
            className={classNames({ ["active"]: filter === g })}
          >
            {g}
          </button>
        ))}
      </div>
      <main>
        {data
          .filter((c) => !filter || c.groups.includes(filter))
          .toSorted((a, b) => a.name.localeCompare(b.name))
          .map((c) => (
            <Color
              name={c.name}
              color={{ r: c.color.r, g: c.color.g, b: c.color.b }}
              select={() => setSelected(c.name)}
              selected={selected === c.name}
            />
          ))}
      </main>
    </>
  );
}

function getAllGroups(): string[] {
  return data
    .flatMap((d) => d.groups)
    .reduce(
      (previous, current) =>
        previous.some((p) => p === current) ? previous : [...previous, current],
      [] as string[]
    )
    .toSorted();
}
