import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { logIn } from "../redux/reducers/auth.js";
import { API_URL } from "../config/apiConfig.js";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FiEye />);

  // Skema validasi dengan Yup untuk form login
  const loginValidation = yup.object({
    email: yup
      .string()
      .required("You must fill the email")
      .min(12, "Email minimal character length must be 12"),
    password: yup.string().required("You must fill the password"),
  });

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidation) });

  // Fungsi submit login
  const formSubmit = async (value) => {
    const queryString = new URLSearchParams(value).toString();

    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      body: queryString,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    const result = await response.json();
    setMessage(result.message);
    setIsSuccess(result.success);

    if (result.success) {
      dispatch(logIn(result.results));
      navigate("/profile"); // Navigasi ke halaman profile setelah login berhasil
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
    formSubmit,
    isSuccess,
    message,
    type,
    icon,
    hidePassword,
  };
};
