import Font from "@/components/Font/Font";
import Link from "next/link";
import data from "./fonts.json";

export default function FontsPage() {
  return (
    <>
      <aside>
        Why not try a{" "}
        <Link href="https://modernfontstacks.com">
          Modern&nbsp;Font&nbsp;Stack
        </Link>{" "}
        instead?
      </aside>
      <main>
        {data.map((d) => (
          <Font
            name={d.name}
            files={d.files}
            url={d.url}
            variants={d.variants}
          />
        ))}
      </main>
    </>
  );
}
