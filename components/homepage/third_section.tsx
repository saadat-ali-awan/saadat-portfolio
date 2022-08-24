import { Repository } from '@prisma/client';
import { useAppSeedData } from 'context/app_seed_data_provider';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './third_section.module.css';

export function ThirdSection() {
  const { seedData } = useAppSeedData();

  if (!seedData) {
    return <div className={styles['loader-container']}>Loading</div>
  }

  let [ selected, setSelected ] = useState<Repository[]>([] as Repository[]);
  useEffect(() => {
    let shuffled = seedData?.repos?.sort(() => Math.random() - 0.5 );
    setSelected(shuffled?.slice(0,4) as Repository[]);
  },[seedData])

  return (
    <section className={styles['projects'] + ' ' + "profile-section"} id="section-3">
      <h2 className={styles['section-heading']}>Some Things I&#8217;ve Built</h2>
      {/* <h2 className={styles["numbered-heading"]} data-sr-id="3" >
        Some Things I&#8217;ve Built
      </h2> */}
      <ul className={styles['styled_projects_grid']}>
        {
          selected.map((repo) => {
            if (repo.name === 'personal-website' || repo.description === '' || repo.description === null) {
              return null;
            }
            return (
              <li key={repo.id} className={styles['project'] + " " + styles['project_list']}>
                <div className={styles['project-content']}>
                  <div>
                    <p className={styles["project-overline"]}>Featured Project</p>
                    <h3 className={styles["project-title"]}>
                      <a href={repo.htmlUrl} rel="noopener noreferrer" target="_blank">{repo.name}</a>
                    </h3>
                    <div className={styles['project-description']}>
                      <p>
                        {repo.description}.
                      </p>
                    </div>
                    {/* <ul className={styles["project-tech-list"]}>
                      <li>VS Code</li>
                      <li>Sublime Text</li>
                      <li>Atom</li>
                      <li>iTerm2</li>
                      <li>Hyper</li>
                    </ul> */}
                    <div className={styles["project-links"]}>
                      <a href={repo.htmlUrl} aria-label="GitHub Link" rel="noopener noreferrer"
                      target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className={styles["feather"] + " " + styles["feather-github"]}>
                          <title>GitHub</title>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                            </path>
                        </svg>
                      </a>
                      {/* <a href="https://halcyon-theme.netlify.com/" aria-label="External Link" className={styles["external"]}
                      rel="noopener noreferrer" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className={styles["feather"] + " " + styles["feather-external-link"]}>
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                          </path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className={styles['project-image']}>
                  <a href="https://halcyon-theme.netlify.com/" rel="noopener noreferrer" target="_blank">
                    <div data-gatsby-image-wrapper=""
                    className={styles["gatsby-image-wrapper"] + " " + styles["gatsby-image-wrapper-constrained"] + " " + styles["img"]}>
                      <div>
                        <img alt="" role="presentation" aria-hidden="true"
                      src="data:image/svg+xml;charset=utf-8,%3Csvg height='438' width='700' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E" />
                      </div>
                      <img aria-hidden="true" data-placeholder-image="" decoding="async" src="/project-list-side.png" alt=""
                      className={styles['project-image-side-style']}/>
                      <picture>
                        <source type="image/avif" srcSet="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/9aa63/halcyon.avif 175w,
                          https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/e6db6/halcyon.avif 350w,
                          https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif 700w" sizes="(min-width: 700px) 700px, 100vw" />
                        <source type="image/webp" srcSet="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/240e7/halcyon.webp 175w,
                          https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/faefe/halcyon.webp 350w,
                          https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d5dc4/halcyon.webp 700w" sizes="(min-width: 700px) 700px, 100vw" />
                        <img width="700" height="438" data-main-image="" sizes="(min-width: 700px) 700px, 100vw" decoding="async"
                          src="https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d2194/halcyon.png" srcSet="/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/cebcc/halcyon.png 175w,
                          https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/272cf/halcyon.png 350w,
                          https://brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/d2194/halcyon.png 700w" alt="Halcyon Theme" />
                      </picture>
                    </div>
                  </a>
                </div>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

export function FourthSection() {
  return (
    <section className="profile-section" id="section-4">
      <div className="container">
        <h1 className="title">
          I'm <strong>Saadat Ali</strong> Fourth Container
        </h1>
      </div>
    </section>
  );
}

export function FifthSection() {
  return (
    <section className="profile-section" id="section-5">
      <div className="container">
        <h1 className="title">
          I'm <strong>Saadat Ali</strong> Fifth Container
        </h1>
      </div>
    </section>
  );
}

export function SixthSection() {
  return (
    <section className="profile-section" id="section-6">
      <div className="container">
        <h1 className="title">
          I'm <strong>Saadat Ali</strong> Sixth Container
        </h1>
      </div>
    </section>
  );
}
