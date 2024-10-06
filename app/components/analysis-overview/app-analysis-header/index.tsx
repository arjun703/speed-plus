import { Button, Icon } from "@shopify/polaris";
import { QuestionCircleIcon} from '@shopify/polaris-icons';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/initial-data";

import { useTranslation } from 'react-i18next';

import LanguageSwitcher from "app/components/language-switcher";
import { rerunAppAnalysis } from "app/actions";

export default function AppAnalysisHeader(){
    
    const { analysis_overview: {last_analysis_date} } = useSelector((state:RootState) => state)
    
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handleReRunAppAnalysis = () => {
        dispatch(rerunAppAnalysis())
    }

    return(
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex g-9 app-analysis-header">
                    <div>
                        {t('app_analysis')}
                    </div>
                </div>
                <div className="d-flex align-items-center g-20">
                    <div>
                        <LanguageSwitcher/>
                    </div>
                    <div className="d-none align-items-center d-md-flex g-9">
                        <div>
                            Last Analysis Date {last_analysis_date}
                        </div>
                        <div >
                            <Icon source={QuestionCircleIcon} tone="base"></Icon>
                        </div>
                    </div>
                    <div>
                        <Button onClick={handleReRunAppAnalysis} variant="primary" tone={'success'}>Rerun App Analysis</Button>
                    </div>
                </div>
            </div>
        
            <div className="d-block d-md-none">
                <div className="d-flex g-9">
                    <div>
                        Last Analysis Date {last_analysis_date}
                    </div>
                    <div>
                        <Icon source={QuestionCircleIcon} tone="base"></Icon>
                    </div>
                </div>
            </div>
        </>

    )
}