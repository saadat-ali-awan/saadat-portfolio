import styles from './first_section.module.css';

export default function FirstSection() {
  return (
    <section className={`profile-section ${styles["first-section"]}`} id="section-1">
      <div className={styles['left-side']}>
        <div className={styles['icons-container']}>
          <div className={styles['icon-container']}>
            <img alt='Ruby on Rails' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" />
          </div>
          <div className={styles['icon-container']}>
            <img alt='RSpec' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original-wordmark.svg" />
          </div>
          <div className={styles['icon-container']}>
            <img alt='Postgres SQL' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
          </div>
        </div>
        <div className={styles['icons-container']}>
          <div className={styles['icon-container']}>
            <img alt='React' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          </div>
          <div className={styles['icon-container']}>
            <img alt='Jest' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
          </div>
          <div className={styles['icon-container']}>
            <img alt='Redux' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
          </div>
        </div>
      </div>
      <img
        src="/full_pic.png"
        alt="profile_image"
        className={styles["full-profile-image"]}
        data-testid="full_profile_image"
      />
    </section>
  );
}
