import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_URL } from "../config/apiConfig.js";

export const useRegister = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [isSuccess, setIsSuccess] = useState(null);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FiEye />);

  // Skema validasi dengan Yup untuk form register
  const regisValidation = yup.object({
    email: yup
      .string()
      .required("You must fill the email")
      .min(12, "Email minimal character length must be 12"),
    password: yup
      .string()
      .required("You must fill the password")
      .min(8, "Password must be at least 8 character")
      .matches(
        /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    agreeTOS: yup
      .string()
      .required()
      .oneOf(["true"], "You have to agree with the terms and conditions"),
  });

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(regisValidation) });

  // Fungsi submit registrasi
  const onSubmit = async (value) => {
    console.log(value);
    const query = new URLSearchParams(value).toString();

    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      body: query,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const result = await response.json();
    setIsSuccess(result.success);
    setMessage(result.message);

    if (result.success) {
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  // Fungsi toggle password visibility
  const hidePassword = () => {
    setType((prevType) => (prevType === "password" ? "text" : "password"));
    setIcon((prevIcon) => (prevIcon.type === FiEye ? <FiEyeOff /> : <FiEye />));
  };

  // Cek token dan redirect jika user sudah login
  useEffect(() => {
    if (token) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, [token, navigate]);

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isSuccess,
    message,
    type,
    icon,
    hidePassword,
  };
};
