import type { BaseTranslation } from "../../i18n-types";

const zh_CN_user = {
  username: "用户名",
  email: "邮箱",
  phone_no: "手机号",
  password: "密码",
  confirm_password: "确认密码",
  nickname: "昵称",
  avatar: "头像",
  real_name: "姓名",
  gender: "性别",
  genders: {
    female: "女",
    male: "男",
    other: "其他",
  },
  birthday: "生日",
  identity: "身份",
  functions: {
    register: {
      title: "注册",
      submit: "注册",
      success: "注册成功",
      error: "注册失败",
      links: {
        login: "登录已有账号",
      },
    },
    login: {
      title: "登录",
      submit: "登录",
      success: "登录成功",
      error: "登录失败",
      links: {
        register: "注册新账号",
      },
    },
    logout: {
      title: "登出",
      success: "登出成功",
      error: "登出失败",
    },
    profile: {
      title: "个人中心",
      info: {
        title: "个人信息",
      },
      auth_info: {
        title: "认证信息",
      },
    },
  },
  validations: {
    user_exists: "该{field:string|lowercase}的用户已存在",
    user_not_found: "用户不存在",
    password_mismatch: "密码不匹配",
    bad_credentials: "用户名或密码错误",
  },
} satisfies BaseTranslation;

export default zh_CN_user;
