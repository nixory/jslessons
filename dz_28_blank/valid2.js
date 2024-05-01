class Valid2 extends Valid {
    constructor(email,password,isValid,emailError = '', passwordError = '') {
        super(email,password,isValid);
        this.emailError = emailError;
        this.passwordError = passwordError;
    }
    validate() {
        super.validate();
        if (this.password.length < 6) {
            this.passwordError = 'Password should be at least 6 characters long';
        }

        if (this.email === '') {
            super.isValid = false;
            this.emailError = 'Email is empty';
        }

        return `${this.emailError} ${this.passwordError}`;
    }
}
