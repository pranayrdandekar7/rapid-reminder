import React from 'react'
import "./FeatureCard.css"

function FeatureCard({featureImg, featureText}) {
  return (
    <div className='feature-card'>
    <img src={featureImg} className='feature-img' alt='Secure'/>
    <p className='feature-text text-center'>{featureText}</p>
   </div>
  )
}

export default FeatureCard