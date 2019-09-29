import { h, Component } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import s from './styles/App.scss';

class App extends Component {

  componentWillMount() {
    this.removeCss = s._insertCss();
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    const getHomeLayout = () => {
      return import(/* webpackChunkName: "HomeLayout" */ 'layouts/HomeLayout').then(m => m.default)
    };
    
    const getAccountLayout = () => {
      return import(/* webpackChunkName: "AccountLayout" */ 'layouts/AccountLayout').then(m => m.default)
    };
    
    const getEntityLayout = () => {
      return import(/* webpackChunkName: "EntityLayout" */ 'layouts/EntityLayout').then(m => m.default)
    };

    const getFutureLayout = () => {
      return import(/* webpackChunkName: "FutureLayout" */ 'layouts/FutureLayout').then(m => m.default)
    };

    const getQRCodeLayout = () => {
      return import(/* webpackChunkName: "getQRCodeLayout" */ 'layouts/QRCodeLayout').then(m => m.default)
    };

    return (
      <div class={s.root}>
        <Header />
        <Router>
          <AsyncRoute path='/' getComponent={getHomeLayout}/>
          <AsyncRoute path='/account' getComponent={getAccountLayout}/>
          <AsyncRoute path="/entity/:id" getComponent={getEntityLayout}/>
          <AsyncRoute path="/future" getComponent={getFutureLayout}/>
          <AsyncRoute path="/qrcode" getComponent={getQRCodeLayout}/>
        </Router>
        <Navbar />
      </div>
    );
  }
}

export default App;
