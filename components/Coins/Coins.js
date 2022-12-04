import React from 'react'
import SectionTitle from '../SectionTitle';
// Icons
import { CiStar } from 'react-icons/ci';
// Styles
import { CoinsListContentStyles, CoinsListCtaStyles, CoinsListTableStyles } from './Coins.styles';
// Sparklines
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Link from 'next/link';

const Coins = ({ coins }) => {
  return (
    <section>
        <div className='container'>
            <CoinsListContentStyles>
                <CoinsListCtaStyles>
                    <SectionTitle children='Search Crypto'/>
                    <input type="text" placeholder='Search coin...'/>
                </CoinsListCtaStyles>

                <div style={{ overflowX: 'auto' }}>
                <CoinsListTableStyles>
                    <thead>
                        <tr>
                            <th></th>
                            <th>#</th>
                            <th>Coin</th>
                            <th></th>
                            <th>Price</th>
                            <th>24h</th>
                            <th>24h Volume</th>
                            <th>Mkt</th>
                            <th>Last 7 days</th>
                        </tr>
                    </thead>

                    <tbody>
                        {coins.map((coin, index) => (
                            <tr key={index}>
                                <td><CiStar /></td>
                                <td>{coin.market_cap_rank}</td>
                                <td>
                                    <Link href={`/coin/${coin.id}`}>
                                    <div>
                                        <img src={coin.image} alt={coin.name} />
                                        {coin.name}
                                    </div>
                                    </Link>
                                </td>
                                <td>{coin.symbol.toUpperCase()}</td>
                                <td>${coin.current_price.toLocaleString()}</td>
                                <td>
                                {coin.price_change_percentage_24h > 0 ? (
                                    <p style={{ color: '#3ADA12' }}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                ) : ( 
                                    <p style={{ color: 'red' }}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                )}
                                </td>
                                <td>${coin.total_volume.toLocaleString()}</td>
                                <td>${coin.market_cap.toLocaleString()}</td>
                                <td>
                                <Sparklines data={coin.sparkline_in_7d.price}>
                                    <SparklinesLine color='#FF00E5' />
                                </Sparklines>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </CoinsListTableStyles>
                </div>
            </CoinsListContentStyles>
        </div>
    </section>
  )
}

export default Coins