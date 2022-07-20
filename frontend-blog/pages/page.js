import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function page() {
    return (
        <>
            <div className={styles.container} passHref>
                <main className={styles.main}>
                    <h1>
                        hi
                    </h1>
                    <Link href='/page2' passHref>
                        <button>go to page 2</button>
                    </Link>
                </main>
            </div>

        </>
    )
}
