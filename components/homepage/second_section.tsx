import { useAppSeedData } from 'context/app_seed_data_provider';
import styles from './second_section.module.css'

export default function SecondSection() {
  const { seedData } = useAppSeedData();

  return (
    <section className={styles["about"] + " " + "profile-section"} id="section-2">
      <div>
        <h2 className={styles["about-heading"]}>About Me</h2>
        <div className={styles["inner-section"]}>
          <div className={styles["about-text"]}>
            <div>
              <p>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
              </p>
              <p className={styles["transition"]}>
                Fast-forward to today, and I've had the privilege of working at
                <a title="advertising agency" href="https://us.mullenlowe.com/">
                  advertising agency
                </a>,
                <a title="start-up" href="https://starry.com/"> a start-up</a>,
                <a title="a huge corporation" href="https://www.apple.com/">a huge corporation
                </a>, and
                <a
                  title="a student-led design studio"
                  href="https://scout.camd.northeastern.edu/">
                  a student-led design studio</a>. My main focus these days is building accessible, inclusive
                products and digital experiences at
                <a title="Upstatement" href="https://upstatement.com/">Upstatement</a>
                for a variety of clients.
              </p>
              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
            </div>
            <ul className={styles["skills-list"]}>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Eleventy</li>
              <li>Node.js</li>
              <li>WordPress</li>
            </ul>
          </div>
          <div className={styles["about-pic"]}>
            <div className={styles["wrapper"]}>
              <div className={styles["image-wrapper"]}>
                <div className={styles["img-div"]}>
                  <img src={seedData?.user?.avatarUrl} alt="person" />
                </div>
                <picture>
                  <img src={seedData?.user?.avatarUrl} alt="Headshot" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
