import React from 'react';
import {SelectedPage} from '@/shared/types';
import useMediaQuery from "../../shared/helpers";
import ExperiencesTimeline from "./ExperiencesTimeline";
import StepsComponent from "./StepsComponent";
import {motion} from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Experiences: React.FC<Props> = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const desktopStyle = "md:h-full py-40 mb-[300px]"
    const mobileStyle = "md:h-full py-40"
    const usedStyle = isAboveMediumScreens ? desktopStyle : mobileStyle
    return (
        <section id="experiences" className={usedStyle}>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}>
                {isAboveMediumScreens ?
                    (
                        <ExperiencesTimeline setSelectedPage={setSelectedPage}/>
                    )
                    : (
                        <div>
                            <StepsComponent setSelectedPage={setSelectedPage}/>
                        </div>)
                }
            </motion.div>
        </section>
    );
};

export default Experiences;
