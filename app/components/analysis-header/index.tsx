import { Button, Icon } from '@shopify/polaris';
import {  QuestionCircleIcon } from '@shopify/polaris-icons';


export default function AnalysisHeader(){
    return(
        <>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div>
                    App Analysis
                </div>
                <div style={{display:'flex', gap: '15px'}}>
                    <div style={{display:'flex', alignItems:'center', gap: '5px'}}>
                        <div>Last Analysis Date 25 July, 2023</div>
                        <Icon source={QuestionCircleIcon} tone='base' />
                    </div>
                    <div>
                        <Button variant="primary" tone="success">Rerun App Analysis</Button>
                    </div>
                </div>
            </div>
        </>
    )
}