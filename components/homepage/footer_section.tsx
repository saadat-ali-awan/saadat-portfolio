import styles from './footer_section.module.css';

export default function FooterSection() {
  return (
    <section className={ "profile-section" + " " + styles["contact"]}>
      <div>
        <h2 className={styles["contact-overline"]}>What's Next?</h2>
        <h2 className={styles["title"]}>Get In Touch <span></span></h2>
        <p>
          Although I'm not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I&#8217;ll try my best to get back to you!
        </p>
        <a
          title="email"
          href="mailto:saadatali0202@gmail.com"
          className={styles["email-link"]}>
            Say Hello
        </a>
      </div>
    </section>
  )
}
