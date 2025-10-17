import React, { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    nameOnCard: 'John Doe',
    cardNumber: '1234 5678 9012 3456',
    cvv: '123',
    month: 'MM',
    year: 'YYYY',
    comments: '',
    sameAsShipping: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', { ...formData });
  };

  const handleCancel = () => {
    console.log('Payment cancelled');
    setFormData({
      nameOnCard: '',
      cardNumber: '',
      cvv: '',
      month: 'MM',
      year: 'YYYY',
      comments: '',
      sameAsShipping: true,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Section */}
      <div className="bg-green-600 text-center py-16 px-4">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="text-5xl">💎</div>
          <div className="text-5xl">⚛️</div>
        </div>
        <h1 className="text-5xl font-bold text-white mb-4">PayFlow Demo</h1>
        <p className="text-lg text-white max-w-2xl mx-auto">Experience seamless payment processing with modern React components<br />and beautiful UI design</p>
      </div>

      {/* Features Section */}
      <div className="bg-gray-200 text-black py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Modern Payment Solutions</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">Built with React and Vite for lightning-fast performance. Secure, responsive, and user-friendly payment forms that adapt to any device.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-green-600 text-3xl">🔒</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Secure Processing</h3>
            <p className="text-gray-600 text-sm">End-to-end encryption ensures your payment data is always protected and secure.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-green-600 text-3xl">⚡</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-gray-600 text-sm">Powered by Vite and React for instant load times and smooth interactions.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-green-600 text-3xl">📱</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Mobile Ready</h3>
            <p className="text-gray-600 text-sm">Fully responsive design that works perfectly on all devices and screen sizes.</p>
          </div>
        </div>
        
        {/* Interactive Demo Section */}
        <div className="max-w-2xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">Interactive Demo</h3>
          <div className="flex justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center gap-2">
              <span>✓</span>
              Click Counter: 0
            </button>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">Edit <code className="bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> and save to test Hot Module Replacement</p>
        </div>
      </div>

      {/* Try Our Payment Form Section */}
      <div className="bg-slate-800 py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Try Our Payment Form</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Experience our beautifully designed payment form with real-time validation, secure input handling, and smooth animations.</p>
        </div>
        
        <div className="bg-gray-900 text-white p-8 rounded-xl max-w-md mx-auto shadow-2xl">
          <form onSubmit={handleSubmit}>
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Payment Method</h2>
              <p className="text-gray-400 text-sm">All transactions are secure and encrypted</p>
            </div>

            {/* Name on Card */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Name on Card</label>
              <input
                type="text"
                name="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            {/* Card Number and CVV */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  placeholder="123"
                  maxLength="3"
                />
              </div>
            </div>

            <p className="text-gray-400 text-xs mb-6">Enter your 16-digit number.</p>

            {/* Month and Year */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2">Month</label>
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none appearance-none"
                >
                  <option value="MM">MM</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={String(i + 1).padStart(2, '0')}>
                      {String(i + 1).padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none appearance-none"
                >
                  <option value="YYYY">YYYY</option>
                  {[...Array(6)].map((_, i) => (
                    <option key={i} value={2024 + i}>
                      {2024 + i}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Billing Address */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Billing Address</h3>
              <p className="text-gray-400 text-sm mb-4">The billing address associated with your payment method</p>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="sameAsShipping"
                  checked={formData.sameAsShipping}
                  onChange={handleChange}
                  className="w-4 h-4 bg-blue-600 border-blue-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label className="ml-2 text-sm">Same as shipping address</label>
              </div>
            </div>

            {/* Comments */}
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">Comments</label>
              <textarea
                name="comments"
                rows="4"
                value={formData.comments}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none resize-none"
                placeholder="Add any additional comments"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;