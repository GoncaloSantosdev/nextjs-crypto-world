import SectionTitle from "../SectionTitle";
// Import Swiper React components
import { SwiperCard, SwiperCardBottom, SwiperCardTop } from "./TrendindCoins.styles";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
// Styles
import { Swiper, SwiperSlide } from "swiper/react";

const TrendingCoins = ({ trending }) => {
  const { coins } = trending;

  console.log(coins);

  return (
    <section>
      <div className="container">
        <div>
          <div>
            <SectionTitle children='Trending Coins'/>
          <div />
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          800: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
         
        }}
        className="mySwiper"
        
      >
        {coins.map((coin, index) => (
          <SwiperSlide key={index}>
           <SwiperCard>
              <SwiperCardTop>
                <p>{index + 1}. <span className='bold'>{coin.item.name}</span></p>
                <img src={coin.item.small}></img>
              </SwiperCardTop>
              <hr />
              <SwiperCardBottom>
                <p>Price: ${coin.item.price_btc}</p>
                <p>Market Cap Rank: {coin.item.market_cap_rank}</p>
                <p>Score: {coin.item.score}</p>
              </SwiperCardBottom>
           </SwiperCard>
          </SwiperSlide>
        ))}

      </Swiper>
      </div>
      </div>
    </section>
  )
}

export default TrendingCoins