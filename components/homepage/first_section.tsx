import styles from './first_section.module.css';
import full_pic from '../../public/full_pic.png';
import { useAppSeedData } from 'context/app_seed_data_provider';

export default function FirstSection() {
  const { seedData } = useAppSeedData();
  return (
    <section id="section-1">
      <h1 className={styles['heading']}>{seedData?.user?.name}</h1>
      <div className={`profile-section ${styles["first-section"]}`}>
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
          src={full_pic.src}
          alt="profile_image"
          className={styles["full-profile-image"]}
          data-testid="full_profile_image"
        />
      </div>
    </section>
  );
}
