export interface Insight {
    param: string;                
    value: number;               
    unit?: string;              
    handle:string;
}

export interface AnalysisOverviewType {
    last_analysis_date: string;   
    insights: Insight[];          
}

export const generateAnalysisOverview = (): AnalysisOverviewType => ({

    last_analysis_date: getRandomDate().toString(), 

    insights: [
        {
            param: "Installed Apps",
            value: 3, 
            handle: 'installed_apps'
        },
        {
            param: "Transfer Size",
            value: getRandomInteger(), 
            unit: "KiB",
            handle: 'transfer_size'
        },
        {
            param: "Main Thread Blocking Time",
            value: getRandomInteger(), 
            unit: "ms",
            handle: 'main_thread_blocking_time'
        },
        {
            param: "Total load time for all apps",
            value: getRandomFloat(), 
            unit: "s",
            handle: 'total_load_time'
        }
    ]
});


// analysis_overview.ts

// Helper function to generate a random date
const getRandomDate = (): string => {
    const start = new Date(2020, 0, 1); // Start from January 1, 2020
    const end = new Date(); // Current date
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    
    // Format the date
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return randomDate.toLocaleDateString('en-US', options); // Adjust locale as needed
};


// Helper function to generate a random integer between min and max (inclusive)
const getRandomInteger = (min: number = 1, max: number = 100): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Helper function to generate a random float between min and max (inclusive)
const getRandomFloat = (min: number = 1, max: number = 100): number => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2)); // Two decimal places
};