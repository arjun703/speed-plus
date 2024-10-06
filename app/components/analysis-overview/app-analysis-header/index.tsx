import { Button, Icon } from "@shopify/polaris";
import { QuestionCircleIcon} from '@shopify/polaris-icons';
import { useSelector, useDispatch } from "react-redux";
import { toggleSortByDeviceType } from "app/actions";


export default function AppAnalysisHeader(){
    
    const analysis_overview = useSelector((state:any) => state.analysis_overview)
    const dispatch = useDispatch();
    const handleSortByDeviceToggle = () => dispatch(toggleSortByDeviceType())

    return(
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="app-analysis-header">
                    App Analysis
                </div>
                <div className="d-flex align-items-center g-20">
                    <div className="d-none d-md-flex g-9">
                        <div>
                            Last Analysis Date {analysis_overview.last_analysis_date}
                        </div>
                        <div onClick={handleSortByDeviceToggle}>
                            <Icon source={QuestionCircleIcon} tone="base"></Icon>
                        </div>
                    </div>
                    <div>
                        <Button variant="primary" tone={'success'}>Rerun App Analysis</Button>
                    </div>
                </div>
            </div>
        
            <div className="d-block d-md-none">
                <div className="d-flex g-9">
                    <div>
                        Last Analysis Date 25 July, 2023
                    </div>
                    <div>
                        <Icon source={QuestionCircleIcon} tone="base"></Icon>
                    </div>
                </div>
            </div>
        </>

    )
}