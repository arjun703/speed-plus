import React from 'react';
import { Card, Grid, Text, Button, TextContainer } from '@shopify/polaris';

// Define the interface for the app analysis data
interface AppAnalysisData {
    title: string;
    value: string | number;
    unit?: string;
}

// Sample data for the app analysis
const appAnalysisData: AppAnalysisData[] = [
    { title: 'Installed Apps', value: 10 },
    { title: 'Transfer size', value: 458, unit: 'KiB' },
    { title: 'Main-Thread Blocking Time', value: 10, unit: 'ms' },
    { title: 'Total Load time for all apps', value: 2.8, unit: 's' },
];

// Main functional component for App Analysis
const AppAnalysis: React.FC = () => {
    return (
        <>
            <div>
                <Grid>
                    {appAnalysisData.map((item, index) => (
                        <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 3, xl: 3}} key={index}>
                            <Card>
                                <TextContainer>
                                    <div>{item.title}</div>
                                    <div>
                                        {item.value} {item.unit && <sup style={{ fontSize: '0.8em', verticalAlign: 'super' }}>{item.unit}</sup>}
                                    </div>
                                </TextContainer>
                            </Card>
                        </Grid.Cell>
                    ))}
                </Grid>
            </div>
        </>
    );
};

export default AppAnalysis;
