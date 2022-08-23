import Image from "next/image";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the brands library to get access to the brands
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import styles from './side_panel.module.css';
import { useSectionState } from "../context/section_state_provider";
const Flip = require('react-reveal/Flip');
import profile_alternate from '../public/profile_alternate.png';
import path from 'path';
import { useAppSeedData } from "context/app_seed_data_provider";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Jello = require('react-reveal/Jello');

export default function SidePanel() {
  const [url, setUrl] = useState("");
  const { sectionState } = useSectionState();
  const { seedData } = useAppSeedData();

  useEffect(
    () => {
      // get resume link from api
      const fetchUrl = async () => {
        const response = await fetch(path.join(process.cwd(), 'api', "resume-link"));
        const data = await response.json();
        setUrl(data.url);
      };
      fetchUrl();
    },[])
  return (
    <div className={styles["side-panel"]}>
      <div className={styles["side-panel__header"]}>
        <div className={styles["side-panel__profile-image"]}>
          <div className={styles["age"]}>
            <div className={styles["years"]}>22</div>
            <Jello><div className={styles["years-string"]}>&nbsp; Years 9 months</div></Jello>
          </div>
          <div className={styles["hiring-status"]}>

            <div className={styles["status-short"]}>
              {seedData?.user?.hireable ? "A" : "O"}
            </div>
            <Jello>
              <div className={styles['status-complete']}>
                {seedData?.user?.hireable ? "ctively Looking" : "pen For Opportunity"}
              </div>
            </Jello>
          </div>
          <Flip left opposite cascade when={sectionState.section_number===0} duration={500} delay={1000}>
            <Image
              src={profile_alternate.src}
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
          <h2 role='heading'>{seedData?.user?.name}</h2>
        </div>
        <div className={styles["side-panel__header-subtitle"]}>
          <h3 data-testid="profession">{seedData?.user?.company}</h3>
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
          <div className={styles["side-panel__body-item-title"] + " " + styles['icon']}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </div>
          <div className={styles["side-panel__body-item-content"]}>
            <p>
              <a href="mailto:saadatali0202@gmail.com" data-testid="email">saadatali0202@gmail.com</a>
            </p>
          </div>
        </div>
        <div className={styles["side-panel__body-item"]}>
          <div className={styles["side-panel__body-item-title"] + " " + styles['icon']}>
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </div>
          <div className={styles["side-panel__body-item-content"]}>
            <p>
              <a href="tel:+923365910676" data-testid="phone">+923365910676</a>
            </p>
          </div>
        </div>
        <div className={styles["side-panel__body-item"]}>
          <div className={styles["side-panel__body-item-title"]}>
            <h3>Rawalpindi, Pakistan</h3>
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
