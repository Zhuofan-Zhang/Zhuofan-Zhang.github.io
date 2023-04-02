export enum SelectedPage {
    Home = "home",
    Experiences = "experiences",
    Portfolios = "portfolios",
    Blogs = "blogs",
    Contacts = "contacts",
    Certifications = "certifications"
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
}


export interface Experience {
    title: string;
    date: string;
    position?: string;
    description?: string[];
}

export const educationExperience: Experience[] = [
    {
        title: 'University of Maryland',
        date: 'Aug 2019 - Dec 2020',
        description: [
            '• Database Management(SQL) ',
            '• Big Data and AI technology (Hadoop, PySpark)',
            '• Data Mining & Analytics(R) ',
            '• Data Process Python'
        ]
    },
    {
        title: 'University of California, Los Angeles',
        date: 'Aug - Sep 2017',
        description: [
            '• Introduction to Statistics(100A)' +
            '• Introduction to Mathematical Statistics(100B)'
        ]
    },
    {
        title: 'East China Normal University',
        date: 'Sep 2015 - Jun 2019',
        description: [
            '• Advanced Mathematics',
            '• Linear Algebra',
            '• Python Programming',
            '• Mathematical Physics Methods'
        ]
    },
];

export const workExperience: Experience[] = [
    {
        title: 'Thoughtworks',
        date: 'July 2021 - Now',
        position: 'Software Development Engineer',
        description: [
            '• Helped migrate billing system using Java for backend and Typescript for frontend to AWS platform with 400k customers in total, generating revenue of 18.4M AUD and 225K invoices monthly and deployed new service on Kubernetes platform',
            '• Designed architect for two new features using AWS Serverless framework following microservice architecture and micro frontend architecture',
            '• Played a key role in removing delivery blocks by reaching out to other teams. Held more than 10 discussions within our team to decide solution options for our new billing system',
            '• Drove data-related work using Python and improved workflow for data verification work within the domain. Drove the work for visualizing data on Snowflake after using DBT, Airflow, and Snowflake for ELT and organized a knowledge-sharing session within the domain']
    },
    {
        title: 'Tencent',
        date: 'November 2020 - Jan 2021',
        position: 'Data Analyst Intern',
        description: [
            '• Analyzed 20 million user search data for Tencent news and generated user search log. Utilized NLP to track trending key words and plot word clouds for each day',
            '• Used and trained LightGBM to do user classification. Used and trained Logistic Regression Model to predict research amounts within the next ten hours',
            '• Used Tableau to Count the time period frequency of users’ search behavior and calculate the graph of the frequency of each word']
    },
];

type StepData = {
    title: string;
    position?: string;
    description?: string;
};

export const educationSteps: StepData[] = [
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

export const workSteps: StepData[] = [
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
