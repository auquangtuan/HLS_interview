import * as yup from "yup";

export const schema = yup.object({
  password: yup
    .string()
    .required("* Bạn cần nhập mật khẩu.")
    .min(6, "* Mật khẩu cần có ít nhất 6 ký tự.")
    .max(32, "* Tối đa 32 kí tự."),
  confirmPassword: yup
    .string()
    .required("* Bạn phải nhập lại mật khẩu.")
    .min(6, "* Tối thiểu 6 ký tự.")
    .max(32, "* Tối đa 32 ký tự.")
    .oneOf([yup.ref("password"), null], "* Mật khẩu chưa khớp."),
  newPassword: yup
    .string()
    .required("* Bạn cần nhập mật khẩu.")
    .min(6, "* Mật khẩu cần có ít nhất 6 ký tự.")
    .max(32, "* Tối đa 32 kí tự."),
});
