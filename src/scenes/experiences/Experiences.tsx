import React from 'react';
import {SelectedPage} from '@/shared/types';
import useMediaQuery from "../../shared/helpers";
import ExperiencesTimeline from "./ExperiencesTimeline";
import StepsComponent from "./StepsComponent";
import {educationExperience, workExperience} from "../../shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Experiences: React.FC<Props> = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="experiences">
            {isAboveMediumScreens ?
                (
                    <ExperiencesTimeline/>
                )
                : (
                    <div>
                        <StepsComponent educations={educationExperience} work={workExperience}/>
                    </div>)
            }
        </section>
    );
};

export default Experiences;
