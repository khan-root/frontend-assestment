export const validateInput = (fieldName, input)=>{
    if (!input) {
        return { isValid: false, message: `${fieldName} cannot be empty.` };
    }
    
  return { isValid: true, message: '' };
}