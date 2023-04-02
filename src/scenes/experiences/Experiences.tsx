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

    return (
        <section id="experiences" className=" md:h-full">
            {isAboveMediumScreens ?
                (
                    <ExperiencesTimeline setSelectedPage={setSelectedPage}/>
                )
                : (
                    <div>
                        <StepsComponent setSelectedPage={setSelectedPage}/>
                    </div>)
            }
        </section>
    );
};

export default Experiences;
