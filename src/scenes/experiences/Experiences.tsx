import React, {useState} from 'react';
import {Timeline} from 'antd';
import {SelectedPage} from '@/shared/types';
import {motion} from 'framer-motion';

interface Event {
    title: string;
    date: string;
    description: string;
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Experiences: React.FC<Props> = ({setSelectedPage}: Props) => {
    const events = [
        {
            title: 'First Event',
            date: '2022-01-01',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            title: 'Second Event',
            date: '2022-02-01',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            title: 'Third Event',
            date: '2022-03-01',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ];

    return (
        <section id="experiences" className="w-full bg-primary-100 py-60">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}>
                <motion.div className="columns-2 mx-auto w-5/6 gap-5 items-center justify-center md:flex md:h-5/6 pb-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: -50},
                                visible: {opacity: 1, x: 0},
                            }}>
                    <span className="text-2xl mx-auto w-5/6">Education</span>
                    <span className="text-2xl mx-auto w-5/6">Work</span>
                </motion.div>
                <motion.div className="columns-2 mx-auto w-5/6 gap-5 items-center justify-center md:flex md:h-5/6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: -50},
                                visible: {opacity: 1, x: 0},
                            }}>
                    <Timeline className="text-white flex-col mx-auto w-5/6">
                        {events.map((event, index) => (
                            <Timeline.Item key={event.date}>
                                <h3>{event.title}</h3>
                                <p>{event.date}</p>
                                <p>{event.description}</p>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                    <Timeline className="text-white flex-col mx-auto w-5/6">
                        {events.map((event, index) => (
                            <Timeline.Item key={event.date}>
                                <h3>{event.title}</h3>
                                <p>{event.date}</p>
                                <p>{event.description}</p>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Experiences;
