import React from 'react';
import {Box, Button, Card, Icon, Link, Text} from '@shopify/polaris';
import {
    AppsFilledIcon
  } from '@shopify/polaris-icons';
export default function AppAnalysisAtGlance() {
  return (
    <Card roundedAbove="sm">
        <div className='d-flex g-5'>
            <div>
                <Icon source={AppsFilledIcon} tone={'base'} />
            </div>
            <div>
                <Text as="h2" variant="headingSm">
                    App Analysis a glance
                </Text>
                <Box paddingBlockStart="200">
                    <Text as="p" variant="bodyMd">
                        Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading.
                    </Text>
                </Box>
                <Button variant="plain">Learn More</Button>
            </div>
        </div>
    </Card>
  );
}