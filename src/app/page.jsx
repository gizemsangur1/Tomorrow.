import Image from "next/image";
import styles from "./page.module.css";
import Parts from "@/app/grids/Parts";

export default function Home() {
  return (
    <main className={styles.main}>
      <Parts />
    </main>
  );
}
