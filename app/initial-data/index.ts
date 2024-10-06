import { installed_apps, InstalledAppType } from './installed_apps';
import {  generateAnalysisOverview } from './analysis_overview';
import { AnalysisOverviewType } from './analysis_overview';

export interface RootState{
    analysis_overview: AnalysisOverviewType;
    sort_by_device_type: 'desktop' | 'mobile';
    installed_apps: InstalledAppType[];
    search_query: string;
    count: number;
}

// Initial state
export const initialState = {
    analysis_overview: generateAnalysisOverview(),
    sort_by_device_type: 'desktop',
    installed_apps:  installed_apps,
    count: 0,
    search_query: ''
};