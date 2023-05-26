import React from 'react';

import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
// import {Adsense} from '@ctrl/react-adsense';

import Dashboard from '../Components/Dashboard/Dashboard';

const Analysis = () => {
  return (
    <div>
      <Navigation />
        {/* <Adsense
          client="ca-pub-9248017741391316"
          slot="5990662559"
        /> */}
        <Dashboard />
      <Footer />
    </div>
  )
}

export default Analysis