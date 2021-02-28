import Head from 'next/head'
import { useState } from 'react'

import styles from '../styles/pages/Login.module.css'


export default function Login() {
  const [userName, setUserName] = useState('')


  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
      </Head>

      <section>
        <div className={styles.simbolo}>
          <img src="/simbolo.svg" alt="" />
        </div>

        <div className={styles.loginInput}>
          <img src="/logo-white.svg" alt="" />
          <h1>Bem-Vindo</h1>

          <div className={styles.text}>
            <img src="/github-logo.svg" alt="" />
            <p>Faça login com seu Github <br /> para começar</p>
          </div>

          <div className={styles.input}>
            <input
              type="text"
              placeholder="Digite seu username"
            />
            <button type="submit">
              <img src="/arrow-right.svg" alt="" />
            </button>
          </div>
        </div>
      </section>

    </div>

  )
}