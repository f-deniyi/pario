import React from 'react'

const BillingInfo = ({ setActiveTab }) => {
  return (
    <div className='personal-info'>
      <form>
        <div
          className=''
          style={{
            marginBottom: '30px'
          }}
        >
          <label className='required'>Name on Card</label>
          <input type='text' placeholder='Opara Linus Ahmed' />
        </div>
        <div
          style={{
            marginBottom: '35px'
          }}
        >
          <label className='required'>Card Type</label>

          <select type='text'>
            <option>Visa</option>
          </select>
        </div>

        <div
          className='form-grid-3'
          style={{
            marginBottom: '80px'
          }}
        >
          <div>
            <label className='required'>Card details</label>

            <input
              className='card-details'
              type='text'
              placeholder='44960 44960 44960 44960'
            />
          </div>
          <div
          // style={{
          //   marginLeft: '33px'
          // }}
          >
            <label className='required'>Expiry date</label>

            <input
              type='text'
              placeholder='04  /  23'
              className='expiry-date'
            />
          </div>
          <div
          // style={{
          //   marginLeft: '33px'
          // }}
          >
            <label className='required'>CVV</label>

            <input type='number' placeholder='923' className='cvv' />
          </div>
        </div>
        <div className='ctrl-container'>
          <div>
            <button
              className='next-button'
              onClick={() => {
                setActiveTab('confirm-payment')
              }}
            >
              Next
            </button>
          </div>
          <div role='button'>
            <p className='cancel-text'>Cancel Payment</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BillingInfo
