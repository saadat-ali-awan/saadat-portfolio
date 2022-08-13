import { faReact } from '@fortawesome/free-brands-svg-icons';
import styles from './first_section.module.css';
export default function FirstSection() {
  return (
    <section className={`profile-section ${styles["first-section"]}`} id="section-1">
      <div className={styles['left-side']}>
        <div>
          <i className="devicon-devicon-plain colored"></i>
        </div>
        <div>Second</div>
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
