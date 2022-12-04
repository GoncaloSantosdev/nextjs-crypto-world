import '../styles/globals.css';
// Redux
import { Provider } from 'react-redux';
import store from '../redux/store';
// Styles
import GlobalStyle from '../styles/Global.styles';
import Layout from '../styles/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
    <GlobalStyle />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>

    </>
  )
}

export default MyApp
