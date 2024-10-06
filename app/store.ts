// store.js
import { createStore } from 'redux';
import { installed_apps } from './initial-data/installed_apps';
import { analysis_overview } from './initial-data/analysis_overview';

// Initial state
const initialState = {
    analysis_overview: analysis_overview,
    sort_by_device_type: 'desktop',
    installed_apps:  installed_apps,
    count: 0,
};

// Reducer function
const counterReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
    
        case 'DECREMENT':
            return { ...state, count: state.count - 1 };

        case 'TOGGLE_SORT_BY_DEVICE_TYPE':
            return {
                ...state,
                sort_by_device_type: state.sort_by_device_type === 'desktop' ? 'mobile' : 'desktop',
            }; 
            
        default:
            return state;
  }
};

// Create Redux store
const store = createStore(counterReducer);

export default store;