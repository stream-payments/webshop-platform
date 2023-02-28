import { IdealBankElement } from "@stripe/react-stripe-js"
import React from "react"

const PaymentIdeal: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col relative w-full pb-6">
        <IdealBankElement />
      </div>
    </div>
  )
}

export default PaymentIdeal
