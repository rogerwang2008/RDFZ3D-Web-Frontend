import type { NamespaceUserTranslation } from "../../i18n-types";

const en_user = {
  username: "Username",
  email: "Email",
  phone_no: "Phone number",
  password: "Password",
  confirm_password: "Confirm password",
  nickname: "Nickname",
  avatar: "Avatar",
  real_name: "Real name",
  gender: "Gender",
  genders: {
    female: "Female",
    male: "Male",
    other: "Walmart Bag",
  },
  birthday: "Birthday",
  identity: "Identity",
  functions: {
    register: {
      title: "Register",
      submit: "Register",
      success: "Registration successful",
      error: "Registration failed",
      links: {
        login: "Login to an existing account",
      },
    },
    login: {
      title: "Login",
      submit: "Login",
      success: "Login successful",
      error: "Login failed",
      links: {
        register: "Register a new account",
      },
    },
    logout: {
      title: "Logout",
      success: "Logout successful",
      error: "Logout failed",
    },
    profile: {
      title: "Profile",
      info: {
        title: "Personal Information",
      },
      auth_info: {
        title: "Authentication Information",
      },
    },
  },
  validations: {
    user_exists: "Index with this {field|lowercase} already exists.",
    user_not_found: "Index not found.",
    password_mismatch: "Passwords do not match.",
    bad_credentials: "Wrong username or password.",
  },
} satisfies NamespaceUserTranslation;

export default en_user;
