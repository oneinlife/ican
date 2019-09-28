import { h } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';

const getHomeLayout = () => {
  return import(/* webpackChunkName: "HomeLayout" */ 'layouts/HomeLayout').then(m => m.default)
};

function App() {
  return (
    <div>
      <Header />
      <Router>
        <AsyncRoute path='/' getComponent={getHomeLayout}/>
      </Router>
      <Navbar />
    </div>
  );
}

export default App;
