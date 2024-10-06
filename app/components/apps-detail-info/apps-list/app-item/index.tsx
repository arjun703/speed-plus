
import { Collapsible, Icon } from '@shopify/polaris';
import {ChevronDownIcon, ChevronUpIcon} from '@shopify/polaris-icons';
import { AlertTriangleIcon, CheckCircleIcon,InfoIcon } from '@shopify/polaris-icons';
import { useState } from 'react';
import URLSlist from './urls-list';
import { InstalledAppType } from 'app/initial-data/installed_apps';
import { useSelector } from 'react-redux';
import { RootState } from 'app/initial-data';

// Define the props interface for the AppItem component
interface AppItemProps {
    installed_app: InstalledAppType;
}

export default function AppItem({installed_app}: AppItemProps) {

    const sort_by_device_type = useSelector((state:RootState) => state.sort_by_device_type)

    const [isURLsListOpen,  setIsURLsListOpen] = useState(false)

    const toggleURLsListVisibility = () => setIsURLsListOpen(!isURLsListOpen)

    const iconBasedOnSeverity  = (severity:'info' | 'normal' | 'critical' ) => {
        switch(severity){
            case 'info':
                return <Icon source={InfoIcon} tone={'info'} />
            case 'normal':
                return <Icon source={CheckCircleIcon} tone={'success'} />
            case 'critical':
                return <Icon source={AlertTriangleIcon} tone={'critical'} />
        }
    } 

    return (
        <>
            <div 
                className="app-list-row d-flex align-items-center" 
                style={{ width: '100%', cursor:'pointer'}}
                onClick={toggleURLsListVisibility}
            >
                {/* Fixed width for 3rd Party Apps column */}
                <div className="app-list-row-item d-flex g-5 align-items-center third-party-apps">
                    <img
                        src={installed_app.app_logo_url}
                        className="app-icon"
                    />
                    <span className="app-name">
                        {installed_app.app_name}
                    </span>
                </div>
                
                <div className="app-list-row-item flex-1">
                    {installed_app.transfer_size.value} {installed_app.transfer_size.unit}
                </div>
                <div className="app-list-row-item flex-1">
                    {installed_app.last_usage}
                </div>
                <div className="app-list-row-item flex-1">
                    {installed_app.average_load_time[sort_by_device_type].value}{installed_app.average_load_time[sort_by_device_type].unit}
                </div>
                
                <div className="app-list-row-item" style={{ width: '80px' }}>
                    {iconBasedOnSeverity(installed_app.severity)}
                </div>
                <div className="app-list-row-item" style={{ width: '80px' }}>
                    <Icon source={!isURLsListOpen ?  ChevronDownIcon : ChevronUpIcon } tone="base" />
                </div>
            
            </div>
            
            <Collapsible
                open={isURLsListOpen}
                id="basic-collapsible"
                transition={{duration: '500ms', timingFunction: 'ease-in-out'}}
                expandOnPrint
            >
                <div style={{paddingBottom: '30px', paddingLeft:'30px'}}>
                    <URLSlist  app_name={installed_app.app_handle}/>
                </div>
            </Collapsible>
        </>
    );
}
  