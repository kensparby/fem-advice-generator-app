import { Suspense } from "react";
import AdviceCard from "./AdviceCard";
import styles from "./page.module.css";
import Loading from "./loading";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Suspense fallback={<Loading />}>
          <AdviceCard />
        </Suspense>
      </div>
    </main>
  );
}
