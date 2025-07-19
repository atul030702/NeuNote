export const checkValidUserData = (
    email: string, 
    password: string, 
    name: string, 
    confirmPassword: string
): string | null => {

    const isEmailValid = (/^\S+@\S+\.\S+$/).test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password);
    const isNameValid = /([a-zA-Z0-9_\s]+)/.test(name);

    if(!isEmailValid) {
        return "Please enter a valid Email ID."
    } else if(!isPasswordValid) {
        return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g. !@#$%^&*).";
    } else if(!isNameValid) {
        return "Please enter a valid name."
    }else if(!confirmPassword) {
        return "Please enter your password again."
    } else if(password !== confirmPassword) {
        return "Passwords do not match.";
    }

    return null;
};