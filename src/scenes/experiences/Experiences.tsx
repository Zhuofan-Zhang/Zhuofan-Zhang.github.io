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
    const education = [
        {
            title: 'Univerisity of Maryland',
            description: 'Aug 2019 - Dec 2020',
        },
        {
            title: 'University of California, Los Angeles',
            description: 'Aug - Sep 2017',
        },
        {
            title: 'East China Normal University',
            description: 'Sep 2015 - Jun 2019',
        }
    ];
    const work = [
        {
            title: 'Thoughtworks',
            position: 'Software Developer',
            description: 'Aug 2019 - Dec 2020',
        },
        {
            title: 'Tencent',
            position: 'Data Analysis Intern',
            description: 'Aug - Sep 2017',
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
                        <StepsComponent educations={education} work={work}/>
                    </div>)
            }
        </section>
    );
};

export default Experiences;
