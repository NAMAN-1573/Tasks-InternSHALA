// src/components/FormValidation.js
export const validatePersonalDetails = (data) => {
  const errors = {};
  if (!data.firstName) errors.firstName = "First name is required.";
  if (!data.lastName) errors.lastName = "Last name is required.";
  if (!data.email) errors.email = "Email is required.";
  else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = "Email address is invalid.";
  if (!data.phone) errors.phone = "Phone number is required.";
  if (!data.gender) errors.gender = "Gender is required.";
  return errors;
};

export const validateAddressDetails = (data) => {
  const errors = {};
  if (!data.address1) errors.address1 = "Address Line 1 is required.";
  if (!data.country) errors.country = "Country is required.";
  if (!data.state) errors.state = "State is required.";
  if (!data.city) errors.city = "City is required.";
  if (!data.pincode) errors.pincode = "Pincode is required.";
  return errors;
};

export const validatePaymentDetails = (data) => {
  const errors = {};
  if (!data.paymentMethod) errors.paymentMethod = "Payment method is required.";
  
  switch (data.paymentMethod) {
    case 'UPI':
      if (!data.upiId) errors.upiId = "UPI ID is required.";
      break;
    case 'Card':
      if (!data.cardHolderName) errors.cardHolderName = "Card holder name is required.";
      if (!data.cardNumber) errors.cardNumber = "Card number is required.";
      if (!data.cvv) errors.cvv = "CVV is required.";
      break;
    case 'Net Banking':
      if (!data.bankName) errors.bankName = "Bank name is required.";
      if (!data.accountHolderName) errors.accountHolderName = "Account holder name is required.";
      if (!data.ifscCode) errors.ifscCode = "IFSC code is required.";
      if (!data.accountNumber) errors.accountNumber = "Account number is required.";
      break;
    default:
      break;
  }
  
  return errors;
};
