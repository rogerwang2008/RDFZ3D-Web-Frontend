// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type {
  BaseTranslation as BaseTranslationType,
  LocalizedString,
  RequiredParams,
} from "typesafe-i18n";

export type BaseTranslation = BaseTranslationType & DisallowNamespaces;
export type BaseLocale = "zh-CN";

export type Locales = "en" | "zh-CN";

export type Translation = RootTranslation & DisallowNamespaces;

export type Translations = RootTranslation & {
  user: NamespaceUserTranslation;
};

type RootTranslation = {
  common: {
    /**
     * 返​回
     */
    back: string;
    /**
     * 确​认
     */
    confirm: string;
    /**
     * 提​交
     */
    submit: string;
    /**
     * 取​消
     */
    cancel: string;
    /**
     * 可​选
     */
    optional: string;
    /**
     * 空
     */
    null_: string;
    validations: {
      /**
       * {​f​i​e​l​d​|​l​o​w​e​r​c​a​s​e​}​不​能​为​空
       * @param {string} field
       */
      required: RequiredParams<"field|lowercase">;
      /**
       * {​f​i​e​l​d​|​l​o​w​e​r​c​a​s​e​}​至​多​有​ ​{​m​a​x​_​l​e​n​g​t​h​}​ ​个​字​符
       * @param {string} field
       * @param {number} max_length
       */
      too_long: RequiredParams<"field|lowercase" | "max_length">;
      /**
       * {​f​i​e​l​d​|​l​o​w​e​r​c​a​s​e​}​至​少​应​有​ ​{​m​i​n​_​l​e​n​g​t​h​}​ ​个​字​符
       * @param {string} field
       * @param {number} min_length
       */
      too_short: RequiredParams<"field|lowercase" | "min_length">;
      /**
       * {​f​i​e​l​d​|​l​o​w​e​r​c​a​s​e​}​无​效
       * @param {string} field
       */
      field_invalid: RequiredParams<"field|lowercase">;
      /**
       * {​f​i​e​l​d​|​l​o​w​e​r​c​a​s​e​}​只​能​包​含​字​母​、​数​字​和​常​用​符​号
       * @param {string} field
       */
      ascii_only: RequiredParams<"field|lowercase">;
      /**
       * {​f​i​e​l​d​|​l​o​w​e​r​c​a​s​e​}​只​能​包​含​字​母​、​数​字​和​下​划​线
       * @param {string} field
       */
      var_name_only: RequiredParams<"field|lowercase">;
    };
    errors: {
      /**
			 * 异​常​:​ ​{​m​e​s​s​a​g​e​}​。​
		​如​果​频​繁​出​错​，​请​在​ ​G​i​t​e​e​ ​或​ ​G​i​t​H​u​b​ ​提​交​ ​I​s​s​u​e​。
			 * @param {string} message
			 */
      unhandled: RequiredParams<"message">;
      /**
			 * 服​务​器​错​误​：​{​m​e​s​s​a​g​e​}​。​
		​如​果​频​繁​出​错​，​请​在​ ​G​i​t​e​e​ ​或​ ​G​i​t​H​u​b​ ​提​交​ ​I​s​s​u​e​。
			 * @param {string} message
			 */
      server: RequiredParams<"message">;
    };
  };
};

export type NamespaceUserTranslation = {
  /**
   * 用​户​名
   */
  username: string;
  /**
   * 邮​箱
   */
  email: string;
  /**
   * 手​机​号
   */
  phone_no: string;
  /**
   * 密​码
   */
  password: string;
  /**
   * 确​认​密​码
   */
  confirm_password: string;
  /**
   * 昵​称
   */
  nickname: string;
  /**
   * 头​像
   */
  avatar: string;
  /**
   * 姓​名
   */
  real_name: string;
  /**
   * 性​别
   */
  gender: string;
  genders: {
    /**
     * 女
     */
    female: string;
    /**
     * 男
     */
    male: string;
    /**
     * 其​他
     */
    other: string;
  };
  /**
   * 生​日
   */
  birthday: string;
  /**
   * 身​份
   */
  identity: string;
  functions: {
    register: {
      /**
       * 注​册
       */
      title: string;
      /**
       * 注​册
       */
      submit: string;
      /**
       * 注​册​成​功
       */
      success: string;
      /**
       * 注​册​失​败
       */
      error: string;
      links: {
        /**
         * 登​录​已​有​账​号
         */
        login: string;
      };
    };
    login: {
      /**
       * 登​录
       */
      title: string;
      /**
       * 登​录
       */
      submit: string;
      /**
       * 登​录​成​功
       */
      success: string;
      /**
       * 登​录​失​败
       */
      error: string;
      links: {
        /**
         * 注​册​新​账​号
         */
        register: string;
      };
    };
    logout: {
      /**
       * 登​出
       */
      title: string;
      /**
       * 登​出​成​功
       */
      success: string;
      /**
       * 登​出​失​败
       */
      error: string;
    };
    profile: {
      /**
       * 个​人​中​心
       */
      title: string;
      info: {
        /**
         * 个​人​信​息
         */
        title: string;
      };
      auth_info: {
        /**
         * 认​证​信​息
         */
        title: string;
      };
    };
  };
  validations: {
    /**
     * 该​{​f​i​e​l​d​|​l​o​w​e​r​c​a​s​e​}​的​用​户​已​存​在
     * @param {string} field
     */
    user_exists: RequiredParams<"field|lowercase">;
    /**
     * 用​户​不​存​在
     */
    user_not_found: string;
    /**
     * 密​码​不​匹​配
     */
    password_mismatch: string;
    /**
     * 用​户​名​或​密​码​错​误
     */
    bad_credentials: string;
  };
};

export type Namespaces = "user";

type DisallowNamespaces = {
  /**
   * reserved for 'user'-namespace\
   * you need to use the `./user/index.ts` file instead
   */
  user?: "[typesafe-i18n] reserved for 'user'-namespace. You need to use the `./user/index.ts` file instead.";
};

export type TranslationFunctions = {
  common: {
    /**
     * 返回
     */
    back: () => LocalizedString;
    /**
     * 确认
     */
    confirm: () => LocalizedString;
    /**
     * 提交
     */
    submit: () => LocalizedString;
    /**
     * 取消
     */
    cancel: () => LocalizedString;
    /**
     * 可选
     */
    optional: () => LocalizedString;
    /**
     * 空
     */
    null_: () => LocalizedString;
    validations: {
      /**
       * {field|lowercase}不能为空
       */
      required: (arg: { field: string }) => LocalizedString;
      /**
       * {field|lowercase}至多有 {max_length} 个字符
       */
      too_long: (arg: { field: string; max_length: number }) => LocalizedString;
      /**
       * {field|lowercase}至少应有 {min_length} 个字符
       */
      too_short: (arg: { field: string; min_length: number }) => LocalizedString;
      /**
       * {field|lowercase}无效
       */
      field_invalid: (arg: { field: string }) => LocalizedString;
      /**
       * {field|lowercase}只能包含字母、数字和常用符号
       */
      ascii_only: (arg: { field: string }) => LocalizedString;
      /**
       * {field|lowercase}只能包含字母、数字和下划线
       */
      var_name_only: (arg: { field: string }) => LocalizedString;
    };
    errors: {
      /**
			 * 异常: {message}。
		如果频繁出错，请在 Gitee 或 GitHub 提交 Issue。
			 */
      unhandled: (arg: { message: string }) => LocalizedString;
      /**
			 * 服务器错误：{message}。
		如果频繁出错，请在 Gitee 或 GitHub 提交 Issue。
			 */
      server: (arg: { message: string }) => LocalizedString;
    };
  };
  user: {
    /**
     * 用户名
     */
    username: () => LocalizedString;
    /**
     * 邮箱
     */
    email: () => LocalizedString;
    /**
     * 手机号
     */
    phone_no: () => LocalizedString;
    /**
     * 密码
     */
    password: () => LocalizedString;
    /**
     * 确认密码
     */
    confirm_password: () => LocalizedString;
    /**
     * 昵称
     */
    nickname: () => LocalizedString;
    /**
     * 头像
     */
    avatar: () => LocalizedString;
    /**
     * 姓名
     */
    real_name: () => LocalizedString;
    /**
     * 性别
     */
    gender: () => LocalizedString;
    genders: {
      /**
       * 女
       */
      female: () => LocalizedString;
      /**
       * 男
       */
      male: () => LocalizedString;
      /**
       * 其他
       */
      other: () => LocalizedString;
    };
    /**
     * 生日
     */
    birthday: () => LocalizedString;
    /**
     * 身份
     */
    identity: () => LocalizedString;
    functions: {
      register: {
        /**
         * 注册
         */
        title: () => LocalizedString;
        /**
         * 注册
         */
        submit: () => LocalizedString;
        /**
         * 注册成功
         */
        success: () => LocalizedString;
        /**
         * 注册失败
         */
        error: () => LocalizedString;
        links: {
          /**
           * 登录已有账号
           */
          login: () => LocalizedString;
        };
      };
      login: {
        /**
         * 登录
         */
        title: () => LocalizedString;
        /**
         * 登录
         */
        submit: () => LocalizedString;
        /**
         * 登录成功
         */
        success: () => LocalizedString;
        /**
         * 登录失败
         */
        error: () => LocalizedString;
        links: {
          /**
           * 注册新账号
           */
          register: () => LocalizedString;
        };
      };
      logout: {
        /**
         * 登出
         */
        title: () => LocalizedString;
        /**
         * 登出成功
         */
        success: () => LocalizedString;
        /**
         * 登出失败
         */
        error: () => LocalizedString;
      };
      profile: {
        /**
         * 个人中心
         */
        title: () => LocalizedString;
        info: {
          /**
           * 个人信息
           */
          title: () => LocalizedString;
        };
        auth_info: {
          /**
           * 认证信息
           */
          title: () => LocalizedString;
        };
      };
    };
    validations: {
      /**
       * 该{field|lowercase}的用户已存在
       */
      user_exists: (arg: { field: string }) => LocalizedString;
      /**
       * 用户不存在
       */
      user_not_found: () => LocalizedString;
      /**
       * 密码不匹配
       */
      password_mismatch: () => LocalizedString;
      /**
       * 用户名或密码错误
       */
      bad_credentials: () => LocalizedString;
    };
  };
};

export type Formatters = {
  lowercase: (value: string) => unknown;
};
