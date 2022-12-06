import CoinInfo from "../../components/CoinInfo/CoinInfo";

const CoinDetails = ({ coinDetails }) => {
  console.log(coinDetails);

  return (
    <section>
        <CoinInfo coinDetails={coinDetails}/>
    </section>
  )
}

export const getServerSideProps = async ({ params }) => { 
  const coinDetails = await fetch(`https://api.coingecko.com/api/v3/coins/${params.id}?localization=false&sparkline=true`).then(
      (res) => res.json()
  );

  return{
      props: {
          coinDetails
      }
  }
}

export default CoinDetails;