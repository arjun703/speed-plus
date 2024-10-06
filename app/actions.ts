// actions.js
export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };
  
export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
};
  
export const toggleSortByDeviceType = () => {
    return {
        type: 'TOGGLE_SORT_BY_DEVICE_TYPE',
    };
};

export const setSearchQuery = (new_search_query:string | undefined) => {
    return{
        type: 'SET_SEARCH_QUERY',
        new_search_query
    };
} 

export const rerunAppAnalysis = () => {
  return{
    type: 'RERUN_APP_ANALYSIS'
  }
}