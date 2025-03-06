import type { NamespaceUserTranslation } from '../../i18n-types'

const en_user = {
    username: "Username",
    email: "Email",
    phone_no: "Phone number",
    password: "Password",
    confirm_password: "Confirm password",
    nickname: "Nickname",
    functions: {
        register: {
            title: "Register",
            submit: "Register",
            success: "Registration successful",
            error: "Registration failed",
        },
        login: {
            title: "Login",
            submit: "Login",
            success: "Login successful",
            error: "Login failed",
        },
    },
    validations: {
        user_exists: "Index with this {field|lowercase} already exists." as any,
        user_not_found: "Index not found.",
        password_mismatch: "Passwords do not match.",
        bad_credentials: "Wrong username or password.",
    },

} satisfies NamespaceUserTranslation

export default en_user
