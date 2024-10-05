interface Row {
    name: string;
    appIconURL: string;
    transferSize: string;
    lastUsage: string;
    averageLoadTime: string;
    isIncreasing: boolean; // Indicate if the metric is increasing
};


export type AppRowType = Row;