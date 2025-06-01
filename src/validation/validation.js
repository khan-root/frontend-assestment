export const validateInput = (fieldName, input)=>{
    if (!input) {
        return { isValid: false, message: `${fieldName} cannot be empty.` };
    }
    
  return { isValid: true, message: '' };
}
export const validateNumberInput = (fieldName, input)=>{
  console.log('******')
    if (!input) {
        return { isValid: false, message: `${fieldName} cannot be empty.` };
    }
    const numberRegex = /^[0-9]+$/;
    if (!numberRegex.test(input)) {
      return {
        isValid: false,
        message: `${fieldName} must contain only numbers.`,
      };
    }
    
  return { isValid: true, message: '' };
}

