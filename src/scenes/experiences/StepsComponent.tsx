import React from 'react';
import {Steps} from 'antd';
import './StepsComponent.css';


const {Step} = Steps;

type StepData = {
    title: string;
    position?: string;
    description?: string;
};

interface StepsComponentProps {
    educations: StepData[];
    work: StepData[];
    currentStep?: number;
}

const StepsComponent: React.FC<StepsComponentProps> = ({educations, work}) => {
    return (
        <div>
            <div
                className="mx-auto text-2xl w-5/6 gap-5 items-center justify-center md:flex md:h-full pb-10">Education
            </div>
            <Steps progressDot current={educations.length} direction="horizontal" responsive={false} size="small"
                   className="whitespace-nowrap md:flex md:h-full w-5/6" style={{overflowX: "scroll"}}>
                {educations.map((step, index) => (
                    <Step className="step-content" key={index} title={step.title} description={step.description}/>
                ))}
            </Steps>
            <div className="mx-auto text-2xl w-5/6 gap-5 items-center justify-center md:flex md:h-full pb-10">Work</div>
            <Steps progressDot current={work.length} direction="horizontal" responsive={false} size="small"
                   className="whitespace-nowrap md:flex md:h-full w-5/6" style={{overflowX: "scroll"}}>
                {work.map((step, index) => (
                    <Step className="step-content" key={index} title={step.title} subTitle={step.position} description={step.description}/>
                ))}
            </Steps>
        </div>
    );
};

export default StepsComponent;
