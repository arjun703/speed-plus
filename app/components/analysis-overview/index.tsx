import { Grid, Card, Icon, BlockStack} from '@shopify/polaris';
import {DragHandleIcon} from '@shopify/polaris-icons';
import AppAnalysisHeader from './app-analysis-header';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSortByDeviceType } from 'app/actions';
import { RootState } from 'app/initial-data';
import {  ClockIcon } from '@shopify/polaris-icons';
import { AppsFilledIcon } from '@shopify/polaris-icons';

export default function AnalysisOverview() {

    const { analysis_overview:{insights} } = useSelector((state:RootState) => state)
    
    const dispatch = useDispatch();
    
  return (
    <>
        <AppAnalysisHeader />
        <Grid>
            {
                insights.map(({param, value, unit}, index) => {
                    return(
                        <>
                            <Grid.Cell columnSpan={{xs: 6, sm: 6, md: 3}}>
                                <Card>
                                    <BlockStack gap={'200'}>
                                        <p className="app-analysis-overview-title">{param}</p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='app-analysis-overview-value'>
                                                <span>{value}</span>
                                                 <sup className='app-analysis-overview-value-unit'>{unit !== undefined ? unit : ''}</sup>
                                            </div>
                                            <div className='d-flex justify-content-center app-analysis-overview-icon'>
                                                {returnIcon(index)}
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


function returnIcon(index:number){
    switch(index){
        case 0:
            return <Icon source={DragHandleIcon}></Icon>
        case 1:
            return <Icon source={AppsFilledIcon}></Icon>
        default:
            return <Icon source={ClockIcon} ></Icon>                             
    }
}