import { PaymentElement } from "@stripe/react-stripe-js"
import React from "react"

const PaymentStripe: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col relative w-full pb-6">
        <PaymentElement />
      </div>
    </div>
  )
}

export default PaymentStripe
