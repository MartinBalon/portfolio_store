const textRegex = /^[a-zA-ZÀ-ž ]*$/;
const emailRegex = /^.+@.+\..+$/;
const phoneRegex = /^\+(?:[0-9 ]●?){6,14}[0-9 ]$/;
const numbersLettersRegex = /^[a-zA-Z0-9À-ž ]*$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%&*]{7,15}$/;
const numbersRegex = /^[0-9 ]*$/;

const validate = {
    // returns true or false 
    text: inputValue => textRegex.test(inputValue),
    email: inputValue => emailRegex.test(inputValue),
    phone: inputValue => phoneRegex.test(inputValue),
    numLet: inputValue => numbersLettersRegex.test(inputValue),
    password: inputValue => passwordRegex.test(inputValue),
    numbers: inputValue => numbersRegex.test(inputValue)
};

export default validate;