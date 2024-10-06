import { Icon, TextField} from '@shopify/polaris';
import {SearchIcon} from '@shopify/polaris-icons';
import { RootState } from 'app/initial-data';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from 'app/actions';
import { useState } from 'react';

export default  function SearchAutoComplete() {
  
  const search_query = useSelector((state:RootState) => state.search_query)

  const dispatch = useDispatch();

  const [input_value, setInputValue] = useState('')

  const handleQueryChange = (value: string) => {
    setInputValue(value); 
    dispatch(setSearchQuery(value))
  };

  return (
    <TextField
      onChange={handleQueryChange}
      label={''}
      value={input_value}
      prefix={<Icon source={SearchIcon} tone="base" />}
      placeholder="Search"
      autoComplete="off"
    />
  );

}