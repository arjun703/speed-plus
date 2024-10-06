import {Select} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export default function SortBySize() {
  const [selected, setSelected] = useState('today');

  const handleSelectChange = useCallback(
    (value: string) => setSelected(value),
    [],
  );

  const options = [
    {label: 'Today', value: 'today'},
    {label: 'Yesterday', value: 'yesterday'},
    {label: 'Last 7 days', value: 'lastWeek'},
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