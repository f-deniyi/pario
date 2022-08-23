import { useState } from 'react'
import PersonalInfo from './components/PersonalInfo'
import BillingInfo from './components/BillingInfo'
import ConfirmPayment from './components/ConfirmPayment'
import PaymentSuccess from './components/PaymentSuccess'

function App () {
  const [activeTab, setActiveTab] = useState('personal-info')
  return (
    <div className='main'>
      {activeTab === 'purchase-completed' ? (
        <PaymentSuccess />
      ) : (
        <div>
          <div>
            <h3 className='section-title'>Complete your Purchase</h3>
          </div>
          <div className='tab-container'>
            <h5
              className={`tab ${
                activeTab === 'personal-info' ? 'active-tab' : ''
              }`}
            >
              Personal Info
            </h5>
            <h5
              className={`tab ${
                activeTab === 'billing-info' ? 'active-tab' : ''
              }`}
            >
              Billing Info
            </h5>
            <h5
              className={`tab ${
                activeTab === 'confirm-payment' ? 'active-tab' : ''
              }`}
            >
              Confirm Payment
            </h5>
          </div>
          <div>
            {activeTab === 'personal-info' && (
              <PersonalInfo setActiveTab={setActiveTab} />
            )}
            {activeTab === 'billing-info' && (
              <BillingInfo setActiveTab={setActiveTab} />
            )}
            {activeTab === 'confirm-payment' && (
              <ConfirmPayment setActiveTab={setActiveTab} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
