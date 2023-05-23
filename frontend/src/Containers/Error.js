import React from 'react'

import Navigation from '../Components/Navigation/Navigation'
import Footer from '../Components/Footer/Footer'

const Error = () => {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center justify-center my-36">
        <div className="text-2xl font-bold">
          頁面建置中
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Error