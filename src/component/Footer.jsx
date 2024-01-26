import React from 'react'
import FooterImg from '../assets/footer.jpg'

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='txt'><p>Smooth and creamy with a soft skin of deep marigold, Alphonso mangoes are considered to be the pinnacle of mangoes, with a superior taste, flavour, texture and sensation to all others. Bursting with mouth-wateringly fresh juice and flavour, Alphonso mangoes are widely heralded around the world, and especially in India, for their smooth consistency and vibrant taste.</p>
    <h3>HOW HEALTHY ARE ALPHONSO MANGOES?</h3>
    <p>Mango is an exceptionally good source of vitamin C which is essential for boosting your immune system. Additionally, Alphonso mangoes contain enzymes that aid digestion and possess high amounts of potassium and magnesium which support proper muscle function. This supports the theory that mangoes keep your digestive tract working efficiently and therefore aid your body process fiber and protein efficiently.</p></div>
       <img
                className="relative z-[1] w-[1440px]"
                src={FooterImg}
                alt="mango"
              />
           <h2>Copyright © 2024 PallaviReactDeveloper</h2>   
    </div>
    
    </>
  )
}

export default Footer