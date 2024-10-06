import {Page, Grid, Card, Icon, BlockStack} from '@shopify/polaris';
import React from 'react';

import {DragHandleIcon} from '@shopify/polaris-icons';

interface AppOverview{
    title: string;
    value: number;
    unit?: string;
}

import AppAnalysisHeader from './app-analysis-header';

export default function AnalysisOverview() {
  return (
    <>
        <AppAnalysisHeader />
        <Grid>
            {
                [1,2,3,4].map((value, index) => {
                    return(
                        <>
                            <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 3}}>
                                <Card>
                                    <BlockStack gap={'200'}>
                                        <p className="app-analysis-overview-title">Installed apps</p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='app-analysis-overview-value'>
                                                <span>12</span>
                                                <sup className='app-analysis-overview-value-unit'>ms</sup>
                                            </div>
                                            <div className='app-analysis-overview-icon'>
                                                <Icon source={DragHandleIcon} tone='base'></Icon>
                                            </div>
                                        </div>
                                    </BlockStack>
                                </Card>
                            </Grid.Cell>
                        </>
                    )
                })
            }
        </Grid>
    </>
  );
}