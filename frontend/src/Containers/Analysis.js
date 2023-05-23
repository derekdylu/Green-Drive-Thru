import React from 'react';

import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
import AdSense from 'react-adsense';

const Analysis = () => {
  return (
    <div>
      <Navigation />
      <AdSense.Google
        client={process.env.AD_CLIENT_ID || ""}
        slot={process.env.AD_CLIENT_SLOT || ""}
      />
      <Footer />
    </div>
  )
}

export default Analysis