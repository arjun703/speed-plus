import { Icon } from '@shopify/polaris';
import {ToggleOffIcon} from '@shopify/polaris-icons';

export default function SortByDeviceType(){
    return(
        <div className="d-none d-md-flex  justify-content-end">
            <div className="d-flex align-items-center g-5">
                <div>
                    Slowest Apps:
                </div>
                <div>
                    Desktop
                </div>
                <div style={{fontSize:'30px'}}>
                    <Icon source={ToggleOffIcon} tone='success' />
                </div>
                <div>
                    Mobile
                </div>
            </div>
        </div>
    )
}