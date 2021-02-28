import { useState, useEffect } from 'react';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const [time, setTime] = useState(0.2 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setActive(true);
    }

    /* executa uma arrow function sempre que a variavel 'active' for alterada */
    useEffect(() => {
        if(active && time > 0){
            /* Executar uma arrow function depois de 1 segundo (1000 ticks) */
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
    }, [active, time]) /* A função é executada também quando time muda, se tornando então recursiva */

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            <button
                type="button"
                className={styles.countdownButton}
                onClick={startCountdown}
            >
                Iniciar um ciclo
            </button>
        </div>
    );
}