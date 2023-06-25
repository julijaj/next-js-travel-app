import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from 'next/head';
import styles from "./styles.module.css";
import { useRouter } from 'next/router'

export default function Trip() {
  const [trip, setTrip] = useState(); // fancy way of writing "const trip". We will use "trip" in html later
  // Get raw data
  const router = useRouter()
  const tripId = router.query.id // get tripId "3" from "http://localhost:3000/trips/3"

  // This function fetches data from mockAPI. This is just a definition, we will run it later
  const fetchTrip = async () => {
    const url = `https://64932e05428c3d2035d174ed.mockapi.io/api/v1/trips/${tripId}`
    const response = await axios.get(url);
    console.log("response", response);

    setTrip(response.data)
  };

  useEffect(() => {
    tripId && fetchTrip(); // fancy way of doing "fetchTrip()". This calls "fetchTrip()" to actually run it.
  }, [tripId]);

  const is_data_loaded = trip != null

  // Display data
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/*when runs first time skip this part of html (because "trip" is still empty).
        On second pass we will have "trip" and this html will get printed.*/}
        {is_data_loaded && (
          <div>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">{trip.destination}!</a>
            </h1>
            <p className={styles.description}>
              <code>{JSON.stringify(trip)}</code>
            </p>

            <div className={styles.grid}>
              <a
                href="/"
                className={styles.card}
              >
                <h3>Back &rarr;</h3>
              </a>
            </div>
          </div>
        )}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
