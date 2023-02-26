import './App.css';
import 'antd/dist/antd.min.js'
import React from 'react';
import { Space } from 'antd';
import NavBar from './components/NavBar/NavBar';
import Summary from './components/Summary/Summary';
import CoinList from './components/CoinsList/index'
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <Provider store={store}>
          <NavBar />
          <Summary />
          <CoinList />
        </Provider>
      </>
    )
  }
}

export default App;
