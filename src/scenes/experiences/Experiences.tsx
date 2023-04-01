import React from 'react';
import {SelectedPage} from '@/shared/types';
import useMediaQuery from "../../shared/helpers";
import ExperiencesTimeline from "./ExperiencesTimeline";
import StepsComponent from "./StepsComponent";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Experiences: React.FC<Props> = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const steps = [
        {
            title: 'Univerisity of Maryland',
        },
        {
            title: 'University of California, Los Angeles',
        },
        {
            title: 'East China Normal University',
        }
    ];

    return (
        <section id="experiences">
            {isAboveMediumScreens ?
                (
                    <ExperiencesTimeline/>
                )
                : (
                    <div>
                        <StepsComponent educations={steps} work={steps}/>
                    </div>)
            }
        </section>
    );
};

export default Experiences;
