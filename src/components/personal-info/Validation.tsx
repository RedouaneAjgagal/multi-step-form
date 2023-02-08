type formInputs = {
    nameVal: string,
    emailVal: string,
    phoneVal: string,
}
export const validForm = ({ nameVal, emailVal, phoneVal }: formInputs): boolean => {
    let errors = []
    const emailRegex = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailVal));
    if (nameVal.trim().length < 3) {
        errors.push('name');
    }
    if (!emailRegex) {
        errors.push('email');
    }
    if (phoneVal.trim().length < 7) {
        errors.push('phone');
    }
    const validForm = errors.length === 0
    return validForm
}