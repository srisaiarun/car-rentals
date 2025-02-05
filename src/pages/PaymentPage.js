import React from "react";

const PaymentPage = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">Payment Page</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg">Thank you for booking! Proceed to payment.</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition mt-4">
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
