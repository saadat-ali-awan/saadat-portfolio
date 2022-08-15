import Image from "next/image";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the brands library to get access to the brands
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import styles from './side_panel.module.css';
import { useSectionState } from "../context/section_state_provider";
import Flip from 'react-reveal/Flip';

export default function SidePanel() {
  const [url, setUrl] = useState("");
  const { sectionState } = useSectionState();

  useEffect(
    () => {
      // get resume link from api
      const fetchUrl = async () => {
        const response = await fetch("/api/resume-link");
        const data = await response.json();
        setUrl(data.url);
      };
      fetchUrl();
    },[])
  return (
    <div className={styles["side-panel"]}>
      <div className={styles["side-panel__header"]}>
        <div className={styles["side-panel__profile-image"]}>
          <Flip left opposite cascade when={sectionState.section_number===0} duration={500} delay={1000}>
            <Image
              src="/profile_alternate.png"
              alt="profile_image_alternate"
              width={200}
              height={200}
              className={styles["side-panel_profile-image"]}
              data-testid="profile_image_alternate"
            />
          </Flip>
          <Flip left opposite cascade when={sectionState.section_number>0} duration={500} delay={1000}>
            <Image
              src="https://avatars.githubusercontent.com/u/35307862?v=4"
              alt="profile_image"
              width={200}
              height={200}
              className={styles["side-panel_profile-image"]}
              data-testid="profile_image"
            />
          </Flip>
        </div>
        <div className={styles["side-panel__header-title"]}>
          <h2 role='heading'>Saadat Ali</h2>
        </div>
        <div className={styles["side-panel__header-subtitle"]}>
          <h3 data-testid="profession">Backend Developer</h3>
        </div>
        <div className={styles["side-panel__header-social"]}>
          <a href="https://www.github.com/Saadat123456" title="GitHub Link" target="_blank" rel="noopener">
            <FontAwesomeIcon
              icon={faGithub}
              data-testid="social-media-icon"
              size="2x"
            />
          </a>
          <a href="https://www.linkedin.com/in/saadatali1999/" title="LinkedIn Link" target="_blank" rel="noopener">
            <FontAwesomeIcon
              icon={faLinkedin}
              data-testid="social-media-icon"
              size="2x"
            />
          </a>
          <a href="https://twitter.com/Saadat02021999" title="Twitter Link" target="_blank" rel="noopener">
            <FontAwesomeIcon
              icon={faTwitter}
              data-testid="social-media-icon"
              size="2x"
            />
          </a>
        </div>
      </div>
      <div className={styles["side-panel__body"]}>
        <div className={styles["side-panel__body-item"]}>
          <div className={styles["side-panel__body-item-title"]}>
            <h3>Email</h3>
          </div>
          <div className={styles["side-panel__body-item-content"]}>
            <p>
              <a href="mailto:saadatali0202@gmail.com" data-testid="email">saadatali0202@gmail.com</a>
            </p>
          </div>
        </div>
        <div className={styles["side-panel__body-item"]}>
          <div className={styles["side-panel__body-item-title"]}>
            <h3>Phone</h3>
          </div>
          <div className={styles["side-panel__body-item-content"]}>
            <p>
              <a href="tel:+923365910676" data-testid="phone">+923365910676</a>
            </p>
          </div>
        </div>
        <div className={styles["side-panel__body-item"]}>
          <div className={styles["side-panel__body-item-title"]}>
            <h3>Age</h3>
          </div>
          <div className={styles["side-panel__body-item-content"]}>
            <p>
              <span data-testid="age">22</span>
            </p>
          </div>
        </div>
        <div className={styles["side-panel__body-item"]}>
          <div className={styles["side-panel__body-item-title"]}>
            <h3>Address</h3>
          </div>
          <div className={styles["side-panel__body-item-content"]}>
            <p>
              <span data-testid="location">Rawalpindi, Pakistan</span>
            </p>
          </div>
        </div>
        <div className={styles["side-panel__body-item"]}>
          <div className={styles["side-panel__body-item-title"]}>
            <h3>Language</h3>
          </div>
          <div className={styles["side-panel__body-item-content"]}>
            <p>
              <span data-testid="language">English</span>
              ,&nbsp;
              <span data-testid="language">Urdu</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles["side-panel__footer"]}>
        <div className={styles["side-panel__footer-item"]}>
          <a href={url} title="Resume" target="_blank" rel="noopener" download>Download Resume</a>
        </div>
      </div>
    </div>
  );

}
