// Sparklines
import { Sparklines, SparklinesLine } from 'react-sparklines';
// DOM Purify
import DOMPurify from 'isomorphic-dompurify';
// Styles
import { CoinContent, CoinContentDescription, CoinContentInfo, CoinContentStats, CoinContentStatsInfo, CoinContentTable, CoinContentTop, CoingContentGraphic, CoinInfoBG, CoinName } from './Coin.styles';

const CoinInfo = ({ coinDetails }) => {
  return (
      <div>
        <CoinInfoBG />

        <div className="container">
        <CoinName>
            <h2>{coinDetails.name}</h2>
        </CoinName>

        <CoinContent>
            <CoinContentTop>
                <div>
                    <img src={coinDetails.image.small} alt={coinDetails.name} />
                    <p>{coinDetails.name} ({coinDetails.symbol.toUpperCase()})</p>
                </div>
                <div>
                    <button className='btn--primary'>Manage Coin</button>
                </div>
            </CoinContentTop>

            <CoinContentInfo>
                    <CoingContentGraphic>
                        <Sparklines data={coinDetails.market_data.sparkline_7d.price}>
                            <SparklinesLine color='#FF00E5' />
                        </Sparklines>
                    </CoingContentGraphic>
                    <CoinContentStats>
                        <h3>Market Stats</h3>

                        <CoinContentStatsInfo>
                            <div>
                                <p className='purple'>Market Rank:</p> {coinDetails.market_cap_rank}
                            </div>
                            <div>
                                <p className='purple'>Volume (24h):</p> ${coinDetails.market_data.total_volume.usd.toLocaleString()}
                            </div>
                            <div>
                                <p className='purple'>24h High:</p> ${coinDetails.market_data.high_24h.usd.toLocaleString()}
                            </div>
                            <div>
                                <p className='purple'>24h Low:</p> ${coinDetails.market_data.low_24h.usd.toLocaleString()}
                            </div>
                        </CoinContentStatsInfo>
                    </CoinContentStats>
            </CoinContentInfo>

            <div className='content-tables' style={{ overflowX: 'auto' }}>
                <CoinContentTable>
                    <thead>
                        <tr>
                            <th>Price Change (24h)</th>
                            <th>Price Change (7d)</th>
                            <th>Price Change (14d)</th>
                            <th>Price Change (60d)</th>
                            <th>Price Change (1Y)</th>
                        </tr>
                    </thead>

                    <tbody>
                       <tr>
                       <td>
                            {coinDetails.market_data.price_change_percentage_24h > 0 ? (
                                <p style={{ color: '#3ADA12' }}>{coinDetails.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                            ) : ( 
                                <p style={{ color: 'red' }}>{coinDetails.market_data.price_change_percentage_24h.toFixed(2)}%</p>
                            )}
                        </td>
                        <td>
                            {coinDetails.market_data.price_change_percentage_7d > 0 ? (
                                <p style={{ color: '#3ADA12' }}>{coinDetails.market_data.price_change_percentage_7d.toFixed(2)}%</p>
                            ) : ( 
                                <p style={{ color: 'red' }}>{coinDetails.market_data.price_change_percentage_7d.toFixed(2)}%</p>
                            )}
                        </td>
                        <td>
                            {coinDetails.market_data.price_change_percentage_14d > 0 ? (
                                <p style={{ color: '#3ADA12' }}>{coinDetails.market_data.price_change_percentage_14d.toFixed(2)}%</p>
                            ) : ( 
                                <p style={{ color: 'red' }}>{coinDetails.market_data.price_change_percentage_14d.toFixed(2)}%</p>
                            )}
                        </td>
                        <td>
                            {coinDetails.market_data.price_change_percentage_60d > 0 ? (
                                <p style={{ color: '#3ADA12' }}>{coinDetails.market_data.price_change_percentage_60d.toFixed(2)}%</p>
                            ) : ( 
                                <p style={{ color: 'red' }}>{coinDetails.market_data.price_change_percentage_60d.toFixed(2)}%</p>
                            )}
                        </td>
                        <td>
                            {coinDetails.market_data.price_change_percentage_1y > 0 ? (
                                <p style={{ color: '#3ADA12' }}>{coinDetails.market_data.price_change_percentage_1y.toFixed(2)}%</p>
                            ) : ( 
                                <p style={{ color: 'red' }}>{coinDetails.market_data.price_change_percentage_1y.toFixed(2)}%</p>
                            )}
                        </td>
                       </tr>
                    </tbody>
                </CoinContentTable>
            </div>

            <CoinContentDescription>
                <div>
                    <h2>About {coinDetails.name}</h2>
                </div>
                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coinDetails.description ? coinDetails.description.en : ''),}} ></p>
            </CoinContentDescription>

        </CoinContent>
        </div>
    </div>
  )
}

export default CoinInfo