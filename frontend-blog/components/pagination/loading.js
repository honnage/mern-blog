import React from 'react'
import styles from '../../styles/Home.module.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio, Oval, Puff, BallTriangle, TailSpin } from 'react-loader-spinner'

export default function Loading() {
    return (
        <>
            <div style={{
                backgroundColor: "#ffffff",
            }}>
                <div className={styles.container} passHref>
                    <main className={styles.main}>
                        <TailSpin height="100" width="100" color='blue' ariaLabel='loading' />
                        <br />
                        <h1 style={{ color: "#000" }}>
                            Loading ...
                        </h1>
                    </main>
                </div>
            </div>
        </>
    )
}
