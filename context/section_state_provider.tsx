import { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';

interface SectionState {
  section_number: number;
  total_sections: number;
}

const useSectionStateController = () => {
  const [sectionState, setSectionState] = useState<SectionState>( { section_number: 0, total_sections: 0 } );
  const stateRef = useRef(sectionState);
  useEffect(() => {
    // get main
    const main = document.querySelector('main');
    // get all sections
    const sections = document.getElementsByClassName('profile-section') as HTMLCollectionOf<HTMLElement>;
    const handleScroll = () => {
      if (main) {
        // get current scroll position
        const scroll_position = main.scrollTop;
        // check if a section is visible
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const section_top = section.offsetTop;
          const section_bottom = section_top + section.offsetHeight;
          if (scroll_position >= section_top && scroll_position <= section_bottom) {
            stateRef.current = { ...stateRef, section_number: i, total_sections: sections.length };
            setSectionState({ section_number: i, total_sections: sections.length });
            break;
          }
        }
      }
    }

    setSectionState({ ...sectionState, total_sections: sections.length, section_number: 0 });
    main?.addEventListener('scroll', handleScroll);
    return () => main?.removeEventListener('scroll', handleScroll);
  }, []);
  return { sectionState, setSectionState };
}

const SectionStateContext = createContext<ReturnType<typeof useSectionStateController>>({ sectionState: { section_number: 0, total_sections: 0 }, setSectionState: () => {} });

export const SectionStateProvider = ({children} : {children: ReactNode}) => {
  const { sectionState, setSectionState } = useSectionStateController();
  return (
    <SectionStateContext.Provider value={{sectionState, setSectionState}}>
      {children}
    </SectionStateContext.Provider>
  );
}

export const useSectionState = () => useContext(SectionStateContext);
