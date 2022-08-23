import React, { useEffect } from 'react'
import successIcon from '../assets/image/success.png'

const PaymentSuccess = ({ setActiveTab }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='payment-success-card'>
      <div className='payment-success-card-wrapper'>
        <div
          className=''
          style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          <div className='success-icon-wrapper'
          style={{
            textAlign: 'center',
            marginBottom: '5px'
          }}>
            <img src={successIcon} alt='icon' />
          </div>
        </div>
        <div
          style={{
            marginBottom: '30px'
          }}
        >
          <h3 className='section-title' style={{
            margin:0
          }}>Purchase Completed</h3>
        </div>
        <p className='payment-success-text'>
          Please check your email for details concerning this transaction
        </p>
        <a href='/' className='return-link'>
          Return Home
        </a>
      </div>
    </div>
  )
}

export default PaymentSuccess
