import * as yup from "yup";

export const schema = yup.object({
  username: yup
    .string()
    .required("* Bạn phải nhập tài khoản.")
    .min(3, "Tối thiểu 3 kí tự.")
    .max(32, "Tối đa 32 kí tự."),
  password: yup
    .string()
    .required("* Bạn phải nhập mật khẩu.")
    .min(6, "* Mật khẩu cần phải có ít nhất 6 ký tự.")
    .max(32, "* Tối đa 32 kí tự."),
});
