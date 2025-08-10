import { RegisterOptions, UseFormGetValues } from 'react-hook-form';

// type Rules = {
//   [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions;
// };
interface FormData {
  email: string;
  password: string;
  confirm_password: string;
}
type Rules = {
  [key in keyof FormData]?: RegisterOptions<FormData, key>;
};

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email không được để trống !',
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email nhập không đúng định dạng !',
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5-160 ký tự',
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5-160 ký tự',
    },
  },
  password: {
    required: {
      value: true,
      message: 'password không được để trống !',
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 ký tự',
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6-160 ký tự',
    },
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Confirm password không được để trống !',
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6-160 ký tự',
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6-160 ký tự',
    },
    validate:
      typeof getValues === 'function'
        ? (value) =>
            value === getValues('password') || 'Password nhập lại không khớp !'
        : undefined,
  },
});
