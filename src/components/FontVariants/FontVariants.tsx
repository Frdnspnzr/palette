"use client";

import { CSSProperties, useRef } from "react";
import FontExamples from "../FontExamples/FontExamples";
import styles from "./fontvariants.module.css";

interface FontVariantsProps {
  fontName: string;
  variants: { name: string; settings: CSSProperties }[];
}

export default function FontVariants({
  fontName,
  variants,
}: FontVariantsProps) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <dialog ref={dialog} className={styles.dialog}>
        <h2>
          {fontName}: {variants.length} variants
        </h2>
        <button
          className={styles.close}
          onClick={() => dialog.current?.close()}
        >
          &times;
        </button>
        <hr />
        {variants?.map((a) => (
          <section key={a.name}>
            <h3>{a.name}</h3>
            <div style={{ fontFamily: fontName }}>
              <FontExamples settings={a.settings} />
            </div>
            <h4>Settings</h4>
            <ul>
              {Object.entries(a.settings).map(([k, v]) => (
                <li key={k}>
                  {k}: {v}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </dialog>
      <button
        className={styles.button}
        onClick={() => dialog.current?.showModal()}
      >
        {variants.length} variants
      </button>
    </>
  );
}
