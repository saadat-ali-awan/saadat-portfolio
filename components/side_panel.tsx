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
import { faEnvelope, faPhone, faNavicon, faClose } from "@fortawesome/free-solid-svg-icons";

const Jello = require('react-reveal/Jello');

export default function SidePanel() {
  const [url, setUrl] = useState("");
  const { sectionState } = useSectionState();
  const { seedData } = useAppSeedData();

  const [icon, setIcon] = useState(faNavicon);

  const date = new Date(`${seedData?.latest_commit?.commit_date}`);

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

  const handleNavIconClick = () => {
    if (icon === faNavicon) {
      setIcon(faClose);
    } else {
      setIcon(faNavicon);
    }
  }
  return (
    <>
      <div className={styles["nav-btn"]}>
        <button title="Nav Menu Button" onClick={handleNavIconClick}>
          <FontAwesomeIcon icon={icon} size="2x"/>
        </button>
      </div>
      <div className={styles["side-panel"] + " " + (icon === faNavicon ? styles["hidden"] : "")}>
        <div className={styles["side-panel__header"]}>
          <div className={styles["side-panel__profile-image"]}>
            {/* <div className={styles["age"]}>
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
            </div> */}
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
          <div className={styles["side-panel__header-subtitle"]}>
            <h3 data-testid="profession">{seedData?.user?.company}</h3>
            <h4>Rawalpindi, Pakistan</h4>
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
          <div className={styles['contact-details']}>
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
          </div>
          {
            seedData?.latest_commit ? (
              <div className={styles['latest-commit-card']}>
                <a title='Latest Commit' href={seedData?.latest_commit?.commit_url} target="_blank" className={styles['card-link']}>
                  <div className={styles["card-header"]}>
                    <a href={seedData?.latest_commit?.repo_url} target="_blank" className={styles['repo-link']}>
                      {seedData?.latest_commit?.repo_name}
                    </a>
                  </div>
                  <div className={styles["card-body"]}>
                    <div className={styles["commit-message"]}>{seedData?.latest_commit?.commit_message}</div>
                    <div className={styles["commit-author"]}>
                      <div>
                        <Image
                          src={seedData?.latest_commit?.author_avatar_url || profile_alternate.src}
                          alt="latest_commit_author_avatar"
                          width={25}
                          height={25}
                          />
                      </div>
                      <div>{seedData?.latest_commit?.author_name}</div>
                    </div>
                  </div>
                  <div className={styles["card-footer"]}>
                    <p>{date.toLocaleDateString()}</p>
                    <p>{date.toLocaleTimeString()}</p>
                  </div>
                </a>
              </div>
            ): <></>
          }
        </div>
        <div className={styles["side-panel__footer"]}>
          <div className={styles["side-panel__footer-item"]}>
            <a href={url} title="Resume" target="_blank" rel="noopener" download>Download Resume</a>
          </div>
        </div>
      </div>
    </>
  );

}
