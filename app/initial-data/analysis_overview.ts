export interface Insight {
    param: string;                
    value: number;               
    unit?: string;              
    handle:string;
}

export interface AnalysisOverview {
    last_analysis_date: string;   
    insights: Insight[];          
}

// Example of analysis overview
export const analysis_overview: AnalysisOverview = {
    last_analysis_date: '25 July, 2024',
    insights: [
        {
            param: "Installed Apps",
            value: 10,
            handle: 'installed_apps'
        },
        {
            param: "Transfer Size",
            value: 458,          
            unit: "KiB",         
            handle: 'transfer_size'
        }
    ]
};
