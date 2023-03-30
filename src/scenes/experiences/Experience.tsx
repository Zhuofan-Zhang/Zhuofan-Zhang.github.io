export interface Experience {
    title: string;
    date: string;
    description?: string[];
}

export const educationExperience : Experience[] = [
        {
            title: 'University of Maryland',
            date: 'August 2019 - December 2020'
        },
        {
            title: 'University of California, Los Angeles',
            date: 'August - September 2017'
        },
        {
            title: 'East China Normal University',
            date: 'September 2015 - June 2019'
        },
    ];

export const workExperience : Experience[] = [
        {
            title: 'First Event',
            date: '2022-01-01',
            description: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
        },
        {
            title: 'Second Event',
            date: '2022-02-01',
            description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
        },
        {
            title: 'Third Event',
            date: '2022-03-01',
            description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
        },
    {
            title: 'Fourth Event',
            date: '2022-04-01',
            description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
        },
    ];
