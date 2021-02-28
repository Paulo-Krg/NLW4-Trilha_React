import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://www.gettyimages.com.br/detail/foto/funny-burrowing-owl-athene-cunicularia-imagem-royalty-free/964611070" alt="Profile picture" />
            <div>
                <strong>Diego Fernandes</strong>
                <img src="icons/level.svg" alt="Level" />
                <p>Level 1</p>
            </div>
        </div>
    );
}