
import { Collapsible, Icon } from '@shopify/polaris';
import {ChevronDownIcon, ChevronUpIcon} from '@shopify/polaris-icons';
import { AlertTriangleIcon } from '@shopify/polaris-icons';
import { useState } from 'react';
import URLSlist from './urls-list';
import { InstalledAppType } from 'app/initial-data/installed_apps';

// Define the props interface for the AppItem component
interface AppItemProps {
    installed_app: InstalledAppType;
}

export default function AppItem({installed_app}: AppItemProps) {

    const [isURLsListOpen,  setIsURLsListOpen] = useState(false)

    const toggleURLsListVisibility = () => setIsURLsListOpen(!isURLsListOpen)

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
                        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                        className="app-icon"
                    />
                    <span className="app-name">
                        Stamped.io - 
                    </span>
                </div>
                
                <div className="app-list-row-item flex-1">
                    1KB
                </div>
                <div className="app-list-row-item flex-1">
                    3s
                </div>
                <div className="app-list-row-item flex-1">
                   5ms
                </div>
                
                <div className="app-list-row-item" style={{ width: '80px' }}>
                    <Icon source={AlertTriangleIcon} tone={'critical'} />
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
                    <URLSlist />
                </div>
            </Collapsible>
        </>
    );
}
  