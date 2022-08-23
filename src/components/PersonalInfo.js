import React from 'react'

const PersonalInfo = ({ setActiveTab }) => {
  return (
    <div className='personal-info' style={{
        marginTop:'84px'
    }}>
      <form>
        <div
          className=''
          style={{
            marginBottom: '48px'
          }}
        >
          <label>Name</label>
          <input type='text' placeholder='Opara Linus Ahmed' />
        </div>
        <div
          style={{
            marginBottom: '60px'
          }}
        >
          <label className='required'>Email Address</label>
          <p className='form-info'>
            The purchase reciept would be sent to this address
          </p>
          <input
            placeholder='OparaLinusAhmed@devmail.com'
            type='email'
            required
          />
        </div>
        <div
          style={{
            marginBottom: '60px'
          }}
        >
          <label>Address 1</label>

          <input type='text' placeholder='The address of the user goes here' />
        </div>
        <div
          style={{
            marginBottom: '66px'
          }}
        >
          <label>Address 2</label>

          <input type='text' placeholder='and here' />
        </div>
        <div
          className='form-grid'
          style={{
            marginBottom: '80px'
          }}
        >
          <div>
            <label>Local Government</label>

            <input type='text' placeholder='and here' />
          </div>
          <div
          // style={{
          //   marginLeft: '33px'
          // }}
          >
            <label>State</label>

            <select type='text'>
              <option>Lagos</option>
            </select>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginBottom: '80px'
          }}
        >
          <div>
            <button
              className='next-button'
              onClick={() => {
                setActiveTab('billing-info')
              }}
            >
              Next
            </button>
          </div>
          <div role='button'>
            <p role='button'  className='cancel-text'>Cancel Payment</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PersonalInfo
