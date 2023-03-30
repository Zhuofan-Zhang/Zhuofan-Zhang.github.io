import React, {useState} from 'react';
import {Timeline} from 'antd';
import {SelectedPage} from '@/shared/types';
import {motion} from 'framer-motion';
import { educationExperience, workExperience } from './Experience';
import {AcademicCapIcon} from "@heroicons/react/24/solid";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Experiences: React.FC<Props> = ({setSelectedPage}: Props) => {

    return (
        <section id="experiences" className="w-5/6 bg-primary-100 py-60">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}>
                <motion.div className="columns-2 mx-auto text-2xl w-5/6 gap-5 items-center justify-center md:flex md:h-full pb-10"
                            style={{fontSize:'30px'}}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: -50},
                                visible: {opacity: 1, x: 0},
                            }}>
                    <span className="mx-auto w-5/6">Education</span>
                    <span className="mx-auto w-5/6">Work</span>
                </motion.div>
                <motion.div className="columns-2 mx-auto w-5/6 gap-5 md:flex md:h-5/6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: -50},
                                visible: {opacity: 1, x: 0},
                            }}>
                    <Timeline className="text-white flex-col mx-auto w-5/6">
                        {educationExperience.map((event, index) => (
                            <Timeline.Item key={event.date} className="text-lg">
                                <h3 className="text-lg">{event.title}</h3>
                                <p>{event.date}</p>
                                <ul>{event.description.map(des => <li>· {des}</li>)}</ul>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                    <Timeline className="text-white flex-col mx-auto w-5/6">
                        {workExperience.map((event, index) => (
                            <Timeline.Item key={event.date}>
                                <h3 className="text-lg">{event.title}</h3>
                                <p className="text-base"> {event.date}</p>
                                <ul>{event.description.map(des => <li>· {des}</li>)}</ul>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Experiences;
