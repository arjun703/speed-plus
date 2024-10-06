// store.js
import { createStore } from 'redux';
import { initialState } from './initial-data';
import { generateAnalysisOverview } from './initial-data/analysis_overview';

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

        case 'SET_SEARCH_QUERY':
            return {
                ...state,
                search_query: action.new_search_query
            }
        
        case 'RERUN_APP_ANALYSIS':
            return{
                ...state,
                analysis_overview: generateAnalysisOverview()
            }

        default:
            return state;
  }
};

// Create Redux store
const store = createStore(counterReducer);

export default store;