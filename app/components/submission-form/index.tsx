import React, { useCallback, useState } from 'react';
import {Box, Button, Card, Icon, Link, Text, TextField} from '@shopify/polaris';
import {
    AppsFilledIcon
  } from '@shopify/polaris-icons';
export default function AppAnalysisAtGlance() {

    const [value, setValue] = useState('Jaded Pixel');

    const handleChange = useCallback(
      (newValue: string) => setValue(newValue),
      [],
    );

  return (
    <Card roundedAbove="sm">
        <div className='d-flex justify-content-center'>
            <div className="d-flex" style={{gap:'50px'}}>
                <Text as="h2" variant="headingSm">
                    Got a Feature Request?
                </Text>
                <div className='d-flex g-5'>
                    <TextField
                        label="Store name"
                        value={value}
                        onChange={handleChange}
                        autoComplete="off"
                    />
                    <Button variant="plain">Learn More</Button>
                </div>
            </div>
        </div>
    </Card>
  );
}