import React from 'react';
import {Steps} from 'antd';
import './StepsComponent.css';
import {educationSteps, SelectedPage, workSteps} from "../../shared/types";
import {motion} from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};
const {Step} = Steps;

const StepsComponent: React.FC<Props> = ({setSelectedPage}: Props) => {
    return (
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}>
            <motion.div
                className="mx-auto w-5/6 gap-5 items-center justify-center md:flex md:h-full"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}>
                <div
                    className="mx-auto text-2xl w-5/6 gap-5 items-center justify-center md:flex md:h-full pb-10">Education
                </div>
                <Steps progressDot current={educationSteps.length} direction="horizontal" responsive={false}
                       size="small"
                       className="whitespace-nowrap md:flex md:h-full w-5/6 pb-20"
                       style={{overflowX: "scroll", paddingBottom: "20px"}}>
                    {educationSteps.map((step, index) => (
                        <Step className="step-content" key={index} title={step.title} description={step.description}/>
                    ))}
                </Steps>
                <div className="mx-auto text-2xl w-5/6 gap-5 items-center justify-center md:flex md:h-full pb-10">Work
                </div>
                <Steps progressDot current={workSteps.length} direction="horizontal" responsive={false} size="small"
                       className="whitespace-nowrap md:flex md:h-full w-5/6"
                       style={{overflowX: "scroll", paddingBottom: "20px"}}>
                    {workSteps.map((step, index) => (
                        <Step className="step-content" key={index} title={step.title} subTitle={step.position}
                              description={step.description}/>
                    ))}
                </Steps>
            </motion.div>
        </motion.div>
    );
};

export default StepsComponent;
