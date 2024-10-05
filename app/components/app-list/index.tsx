import { useState } from 'react';
import { Card, Page, Button, Collapsible, Icon } from '@shopify/polaris';
import { ChevronUpIcon, ChevronDownIcon } from '@shopify/polaris-icons';
import React from 'react';

import { appsList } from 'app/data/app_list';

import { listOfURLs } from 'app/data/url_list';

console.log("anoj", listOfURLs)

function AppList() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  console.log("prachanda", listOfURLs)
  const toggleCollapsible = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
      <Card>
        <div className="custom-table">
          <div className="custom-table-header">
            <div className="custom-table-row">
              <div className="custom-table-cell first-column" style={{ width: '250px', whiteSpace: 'nowrap' }}>3rd Party Apps</div>
              <div className="custom-table-cell">Transfer Size</div>
              <div className="custom-table-cell">Last Usage</div>
              <div className="custom-table-cell">Average Load Time</div>
              <div className="custom-table-cell" style={{ flex: '0 0 80px', width: '80px' }} />
              <div className="custom-table-cell" style={{ flex: '0 0 80px', width: '80px' }} />
            </div>
          </div>
          <div className="custom-table-body">
            {appsList.map((row, index) => {
              const isOpen = openIndex === index;
              return (
                <React.Fragment key={index}>
                  <div className="custom-table-row" style={{ cursor: 'pointer' }} onClick={() => toggleCollapsible(index)}>
                    <div className="custom-table-cell first-column" style={{ width: '250px', whiteSpace: 'nowrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={row.appIconURL}
                          alt={`${row.name} icon`}
                          style={{ width: 40, height: 40, marginRight: 8 }}
                        />
                        {row.name}
                      </div>
                    </div>
                    <div className="custom-table-cell">{row.transferSize}</div>
                    <div className="custom-table-cell">{row.lastUsage}</div>
                    <div className="custom-table-cell">{row.averageLoadTime}</div>
                    <div className="custom-table-cell" style={{ flex: '0 0 80px', width: '80px' }} />
                    <div className="custom-table-cell" style={{ flex: '0 0 80px', width: '80px' }}>
                      {isOpen ? <Icon source={ChevronUpIcon} tone="base" /> : <Icon source={ChevronDownIcon} tone="base" />}
                    </div>
                  </div>
                  <Collapsible open={isOpen} id={`collapsible-row-${index}`} transition={{ duration: '200ms', timingFunction: 'ease' }}>
                    <div style={{ padding: '1rem' }}>
                      <div className="custom-table">
                        <div className="custom-table-header">
                          <div className="custom-table-row">
                            <div className="custom-table-cell first-column" style={{ width: '250px', whiteSpace: 'nowrap' }}>
                              URL
                            </div>
                            <div className="custom-table-cell">Transfer Size</div>
                            <div className="custom-table-cell">Total CPU Time</div>
                            <div className="custom-table-cell">Script Evaluation</div>
                            <div className="custom-table-cell">Other Metric</div>
                          </div>
                        </div>
                        <div className="custom-table-body">
                          {listOfURLs.map((nestedRow:any, nestedIndex:number) => (
                            <div className="custom-table-row" key={nestedIndex}>
                              <div className="custom-table-cell first-column" style={{ width: '250px', whiteSpace: 'nowrap' }}>
                                {nestedRow.url}
                              </div>
                              <div className="custom-table-cell">{nestedRow.transferSize}</div>
                              <div className="custom-table-cell">{nestedRow.totalCPUTime}</div>
                              <div className="custom-table-cell">{nestedRow.scriptEvaluation1}</div>
                              <div className="custom-table-cell">{nestedRow.scriptEvaluation2}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Collapsible>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </Card>
  );
}

export default AppList;
