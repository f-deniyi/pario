import React from 'react'
import nairaIcon from '../assets/image/naira.png'
const ConfirmPayment = ({ setActiveTab }) => {
  return (
    <div className='confirm-payment'>
      <div className='confirm-payment-card'>
        <div className='confirm-payment-card-header'>
          <p>Item Name</p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img src={nairaIcon} alt='..' />
            <p
              style={{
                marginLeft: '13.85px'
              }}
            >
              Price
            </p>
          </div>
        </div>

        <div className='payment-wrapper'>
          <div className='payment-container'>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '40px'
              }}
            >
              <p className='payment-description'>Data science and usability</p>
              <p className='payment-value'>50,000.00</p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '37px'
              }}
            >
              <p className='payment-description'>Shipping</p>
              <p className='payment-value text-black'>0.00</p>
            </div>
          </div>
          <div
            style={{
              padding: '0 21.79px'
            }}
          >
            <div className='total-payout-wrapper'>
              <p className='payment-description'>Total</p>
              <p className='payment-value'>50,000.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className='ctrl-container'>
        <div>
          <button
            className='next-button'
            onClick={() => {
              setActiveTab('purchase-completed')
            }}
          >
            Pay
          </button>
        </div>
        <div role='button'>
          <p className='cancel-text'>Cancel Payment</p>
        </div>
      </div>
    </div>
  )
}

export default ConfirmPayment
