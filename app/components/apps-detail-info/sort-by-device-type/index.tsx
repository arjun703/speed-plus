import { Icon } from '@shopify/polaris';
import { toggleSortByDeviceType } from 'app/actions';
import { RootState } from 'app/initial-data';
import { useDispatch, useSelector } from 'react-redux';
import ToggleIcon from './toggle-icon';

export default function SortByDeviceType(){

    const {sort_by_device_type } = useSelector((state:RootState) => state)
    const dispatch = useDispatch();
    const handleSortByDeviceToggle = () => {
        dispatch(toggleSortByDeviceType())
    }

    return(
        <div className="d-none d-md-flex  justify-content-end">
            <div className="d-flex align-items-center g-5">
                <div>
                    Slowest Apps:
                </div>
                <div>
                    Desktop
                </div>
                <div
                    className={'toggle-icon d-flex align-items-center' + ( sort_by_device_type == 'mobile' ? ' rotate-180': '')} 
                    style={{cursor:'pointer'}} 
                    onClick={handleSortByDeviceToggle}
                >
                    <ToggleIcon width={40} height={20} fill='#008060'/>
                </div>
                <div>
                    Mobile
                </div>
            </div>
        </div>
    )
}