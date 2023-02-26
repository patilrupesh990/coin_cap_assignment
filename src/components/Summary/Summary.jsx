import React, { Component } from 'react'
import {SummaryContainerLGScreen, SummaryContainerSmScreen, SummaryHeading, SummaryText, SummaryValue } from './SummaryElements'

export default class Summary extends Component {
    render() {
        return (
            <>
                <SummaryContainerLGScreen>
                    <SummaryText>
                        <SummaryHeading>
                            MARKET CAP
                        </SummaryHeading>
                        <SummaryValue>
                            $1.20T
                        </SummaryValue>
                    </SummaryText>
                    <SummaryText>
                        <SummaryHeading>
                            EXCHANGE VOL
                        </SummaryHeading>
                        <SummaryValue>
                            $30.61B
                        </SummaryValue>
                    </SummaryText>
                    <SummaryText>
                        <SummaryHeading>
                            ASSETS
                        </SummaryHeading>
                        <SummaryValue>
                            2,295
                        </SummaryValue>
                    </SummaryText>
                    <SummaryText>
                        <SummaryHeading>
                            EXCHANGES
                        </SummaryHeading>
                        <SummaryValue>
                            73
                        </SummaryValue>
                    </SummaryText>
                    <SummaryText>
                        <SummaryHeading>
                            MARKETS
                        </SummaryHeading>
                        <SummaryValue>
                            12,563
                        </SummaryValue>
                    </SummaryText>
                    <SummaryText>
                        <SummaryHeading>
                            BTC DOM INDEX
                        </SummaryHeading>
                        <SummaryValue>
                            36.9%
                        </SummaryValue>
                    </SummaryText>
                </SummaryContainerLGScreen>
                
                {/* UI for small screen */}
                <SummaryContainerSmScreen>
                    <SummaryText>
                        <SummaryHeading>
                            Market Snapshot
                        </SummaryHeading>
                    </SummaryText>
                    
                </SummaryContainerSmScreen>
            </>
        )
    }
}
