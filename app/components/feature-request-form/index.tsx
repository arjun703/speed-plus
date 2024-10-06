import React, { useCallback, useState } from 'react';
import {Box, Button, Card, Icon, Link, Text, TextField} from '@shopify/polaris';

export default function FeatureRequestForm() {

    const [value, setValue] = useState('');

    const handleChange = useCallback(
      (newValue: string) => setValue(newValue),
      [],
    );

  return (
    <div style={{marginBottom:'20px'}}>
      <Card  roundedAbove="sm">
          <div className='d-flex justify-content-center'>
              <div className="d-flex align-items-center" style={{gap:'50px'}}>
                  <Text as="h2" variant="headingSm">
                      Got a Feature Request?
                  </Text>
                  <div className='d-flex g-5'>
                      <TextField
                          label=""
                          value={value}
                          placeholder='Tell us more about your idea'
                          onChange={handleChange}
                          autoComplete="off"
                      />
                      <Button variant="primary" tone='success'>Submit</Button>
                  </div>
              </div>
          </div>
      </Card>
    </div>
  );
}