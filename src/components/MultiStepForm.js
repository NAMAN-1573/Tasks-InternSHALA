// src/components/MultiStepForm.js
import React, { useState } from 'react';
import { validatePersonalDetails, validateAddressDetails, validatePaymentDetails } from './FormValidation';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    paymentMethod: '',
    upiId: '',
    cardHolderName: '',
    cardNumber: '',
    cvv: '',
    bankName: '',
    accountHolderName: '',
    ifscCode: '',
    accountNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    let validationErrors;
    
    switch (step) {
      case 1:
        validationErrors = validatePersonalDetails(formData);
        break;
      case 2:
        validationErrors = validateAddressDetails(formData);
        break;
      case 3:
        validationErrors = validatePaymentDetails(formData);
        break;
      default:
        validationErrors = {};
    }
    
    if (Object.keys(validationErrors).length === 0) {
      setStep(step + 1);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    
    switch (step) {
      case 1:
        validationErrors = validatePersonalDetails(formData);
        break;
      case 2:
        validationErrors = validateAddressDetails(formData);
        break;
      case 3:
        validationErrors = validatePaymentDetails(formData);
        break;
      default:
        break;
    }
    
    if (Object.keys(validationErrors).length === 0) {
      alert(JSON.stringify(formData, null, 2));
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-900 text-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div>
            <h2 className="text-3xl mb-4 font-bold">Personal Details</h2>
            <label className="block mb-4">
              First Name
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                required
              />
              {errors.firstName && <p className="text-red-400">{errors.firstName}</p>}
            </label>
            <label className="block mb-4">
              Last Name
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                required
              />
              {errors.lastName && <p className="text-red-400">{errors.lastName}</p>}
            </label>
            <label className="block mb-4">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                required
              />
              {errors.email && <p className="text-red-400">{errors.email}</p>}
            </label>
            <label className="block mb-4">
              Phone Number
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                required
              />
              {errors.phone && <p className="text-red-400">{errors.phone}</p>}
            </label>
            <label className="block mb-4">
              Gender
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                required
              >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="text-red-400">{errors.gender}</p>}
            </label>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-3xl mb-4 font-bold">Address Details</h2>
            <label className="block mb-4">
              Address Line 1
              <input
                type="text"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                required
              />
              {errors.address1 && <p className="text-red-400">{errors.address1}</p>}
            </label>
            <label className="block mb-4">
              Address Line 2
              <input
                type="text"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
              />
            </label>
            <label className="block mb-4">
              Country
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                required
              />
              {errors.country && <p className="text-red-400">{errors.country}</p>}
            </label>
            <label className="block mb-4">
              State
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                required
              />
              {errors.state && <p className="text-red-400">{errors.state}</p>}
            </label>
            <label className="block mb-4">
              City
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                required
              />
              {errors.city && <p className="text-red-400">{errors.city}</p>}
            </label>
            <label className="block mb-4">
              Pincode
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                required
              />
              {errors.pincode && <p className="text-red-400">{errors.pincode}</p>}
            </label>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-3xl mb-4 font-bold">Payment Details</h2>
            <label className="block mb-4">
              Payment Method
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                required
              >
                <option value="" disabled>Select Payment Method</option>
                <option value="UPI">UPI</option>
                <option value="Card">Card</option>
                <option value="Net Banking">Net Banking</option>
              </select>
              {errors.paymentMethod && <p className="text-red-400">{errors.paymentMethod}</p>}
            </label>

            {formData.paymentMethod === 'UPI' && (
              <label className="block mb-4">
                UPI ID
                <input
                  type="text"
                  name="upiId"
                  value={formData.upiId}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                  required
                />
                {errors.upiId && <p className="text-red-400">{errors.upiId}</p>}
              </label>
            )}

            {formData.paymentMethod === 'Card' && (
              <>
                <label className="block mb-4">
                  Card Holder Name
                  <input
                    type="text"
                    name="cardHolderName"
                    value={formData.cardHolderName}
                    onChange={handleChange}
                    className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                    required
                  />
                  {errors.cardHolderName && <p className="text-red-400">{errors.cardHolderName}</p>}
                </label>
                <label className="block mb-4">
                  Card Number
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                    required
                  />
                  {errors.cardNumber && <p className="text-red-400">{errors.cardNumber}</p>}
                </label>
                <label className="block mb-4">
                  CVV
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                    required
                  />
                  {errors.cvv && <p className="text-red-400">{errors.cvv}</p>}
                </label>
              </>
            )}

            {formData.paymentMethod === 'Net Banking' && (
              <>
                <label className="block mb-4">
                  Bank Name
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                    className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                    required
                  />
                  {errors.bankName && <p className="text-red-400">{errors.bankName}</p>}
                </label>
                <label className="block mb-4">
                  Account Holder Name
                  <input
                    type="text"
                    name="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={handleChange}
                    className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                    required
                  />
                  {errors.accountHolderName && <p className="text-red-400">{errors.accountHolderName}</p>}
                </label>
                <label className="block mb-4">
                  IFSC Code
                  <input
                    type="text"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleChange}
                    className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                    required
                  />
                  {errors.ifscCode && <p className="text-red-400">{errors.ifscCode}</p>}
                </label>
                <label className="block mb-4">
                  Account Number
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className="block w-full p-3 border border-gray-700 rounded bg-gray-800"
                    required
                  />
                  {errors.accountNumber && <p className="text-red-400">{errors.accountNumber}</p>}
                </label>
              </>
            )}
          </div>
        )}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-600 text-white py-2 px-4 rounded transition-transform transform hover:scale-105"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white py-2 px-4 rounded transition-transform transform hover:scale-105"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
