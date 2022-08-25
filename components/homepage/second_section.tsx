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
                Hello! My name is Saadat Ali, and I am a full-stack developer with a specialization in JavaScript,
                CSS & HTML, React, Redux, and Ruby on Rails. With professional experience in Android and Flutter
                development and certification in full stack development from Microverse, I can build professional
                applications with good problem-solving skills.
              </p>
              <p className={styles["transition"]}>
                Currently, I&#8217;m at Microverse, a coding school that allows devs from all over the world to
                pair-program and build projects together. Here I have learned about the professional tools that we
                can use to make projects easy to manage and modify in the future.
              </p>
              <p>
                I began my career as a Freelance Android Developer for a startup. Working there I learned how to
                gather software requirements and work on tight deadlines. The experience helped me understand
                that completing a task is more important than being perfect.
              </p>
              <p>
                Being a gold medalist is a small brag, but I am proud that I finished my graduation in Computer
                Engineering with honors which helped me learn that being consistent is the key to success.
                Also, I participated in Hackathon for Android Development, and my team was placed second out of
                fifty teams that participated. This competition taught me to challenge myself in a competitive
                environment and manage to do the task within time.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
            </div>
            <ul className={styles["skills-list"]}>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Ruby on Rails</li>
              <li>Node.js</li>
              <li>Next.js</li>
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
