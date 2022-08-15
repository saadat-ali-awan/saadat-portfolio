import styles from './second_section.module.css'

export default function SecondSection() {
  return (
    <section className="profile-section" id="section-2">
      <h2 className={styles["section-heading"]}>Skills</h2>
      <div className={styles["columns"]}>
        <div className={styles["column"]}>
          <h2>Backend</h2>
          <ul className={styles["skills-list"]}>
            <li>Ruby on Rails</li>
            <li>Postgres SQL</li>
            <li>RSpec</li>
          </ul>
        </div>
        <div className={styles["column"]}>
          <h2>Frontend</h2>
          <ul className={styles["skills-list"]}>
            <li>React</li>
            <li>Redux</li>
            <li>Jest</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
