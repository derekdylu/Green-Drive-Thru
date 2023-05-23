import React from 'react';

import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import {Adsense} from '@ctrl/react-adsense';

const Analysis = () => {
  return (
    <div>
      <Navigation />
      <Adsense
        client={process.env.AD_CLIENT_ID || ""}
        slot={process.env.AD_CLIENT_SLOT || ""}
      />
      <Footer />
    </div>
  )
}

export default Analysis