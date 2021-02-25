import styles from '../styles/components/Profile.module.css';

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/33937166?s=460&u=26a01f6748c2d7594cd999eca5ba640b0972d72c&v=4" alt="Renato Lôbo" />
      <div>
        <strong>Renato Lôbo</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}