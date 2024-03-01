"use client";
import styles from "./page.module.css";
import Gallery from "./gallery";
import { useEffect, useState } from "react";
import { User } from "./types/user";
import { getUsers } from "./service/user";

export default function Home() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    setLoading(true);
    try {
      const response = await getUsers();
      setData(response);
    } catch (err) {
      console.log("something went wrong");
      setData([]);
    }
    setLoading(false);
  };

  return (
    <main className={styles.main}>
      {loading ? (
        <p>LOADING...</p>
      ) : data.length > 0 ? (
        <Gallery users={data} />
      ) : (
        <>No Data</>
      )}
    </main>
  );
}
