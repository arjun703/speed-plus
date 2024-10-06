import {Select} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export default function SortBySize() {
  const [selected, setSelected] = useState('today');

  const handleSelectChange = useCallback(
    (value: string) => setSelected(value),
    [],
  );

  const options = [
    {label: 'Transfer Size Ascending', value: 'transfer_size_ascending'},
    {label: 'Transfer Size Descending', value: 'transfer_size_descending'},
  ];

  return (
    <Select
      label=""
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
  );
}