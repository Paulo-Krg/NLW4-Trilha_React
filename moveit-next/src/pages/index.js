import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from "../components/Countdown";

import { Button } from '../../../moveit-next/src/components/Button';
//import { ButtonTsx } from './components/Button.tsx';

import styles from '../styles/pages/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
      <h1>Hello NLW</h1>

      <Button color="red">
        Botão 1
      </Button>
      <Button color="blue">
        Botão 2
      </Button>
      <Button color="green">
        Botão 3
      </Button>
    </div>
  )
}
