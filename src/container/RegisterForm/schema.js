import * as yup from "yup";

export const schema = yup.object({
  fullName: yup
    .string()
    .required("* Họ và tên bạn là gì?")
    .min(3, "* Họ và Tên cần phải có ít nhất 6 ký tự.")
    .max(32, "* Tối đa 32 kí tự."),
  userName: yup
    .string()
    .required("* Tên người dùng mà bạn muốn?")
    .min(5, "* Tên người dùng phải có ít nhất 5 ký tự.")
    .max(32, "* Tối đa 32 kí tự."),
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
});
