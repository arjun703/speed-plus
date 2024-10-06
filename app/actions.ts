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