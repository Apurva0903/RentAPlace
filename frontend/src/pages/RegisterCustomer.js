import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { registerCustomer } from "../libs/api";
import { useDispatch } from "react-redux";
import { openLoginModal } from "../features/uiSlice";
import { toast } from "react-hot-toast";

const RegisterCustomer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const RegisterSchema = z
        .object({
            name: z.string().min(2, "Name is required"),
            email: z.string().email("Invalid email address"),
            phone: z.string().min(10, "Phone number must be at least 10 digits"),
            password: z.string().min(6, "Password must be at least 6 characters"),
            repeatPassword: z.string().min(6, "Confirm Password is required"),
        })
        .refine((data) => data.password === data.repeatPassword, {
            message: "Passwords do not match",
            path: ["repeatPassword"],
        });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(RegisterSchema) });

    const mutation = useMutation(registerCustomer, {
        onSuccess: () => {
            toast.success("Registration successful! Please login.");
            navigate("/");
            dispatch(openLoginModal());
        },
        onError: (error) => {
            toast.error("Registration failed. Please try again.");
            console.error(error);
        },
    });

    const onSubmit = (data) => {
        mutation.mutate({ ...data, role: "Customer" });
    };

    return (
        <div className="container mt-5 pt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-5">
                            <h2 className="text-center mb-4 fw-bold text-primary">Customer Sign Up</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                        placeholder="John Doe"
                                        {...register("name")}
                                    />
                                    <div className="invalid-feedback">{errors.name?.message}</div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                        placeholder="name@example.com"
                                        {...register("email")}
                                    />
                                    <div className="invalid-feedback">{errors.email?.message}</div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                        placeholder="1234567890"
                                        {...register("phone")}
                                    />
                                    <div className="invalid-feedback">{errors.phone?.message}</div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                        placeholder="••••••"
                                        {...register("password")}
                                    />
                                    <div className="invalid-feedback">{errors.password?.message}</div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${errors.repeatPassword ? "is-invalid" : ""}`}
                                        placeholder="••••••"
                                        {...register("repeatPassword")}
                                    />
                                    <div className="invalid-feedback">{errors.repeatPassword?.message}</div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 py-2 rounded-pill fw-bold"
                                    disabled={mutation.isLoading}
                                >
                                    {mutation.isLoading ? "Creating Account..." : "Create Customer Account"}
                                </button>
                            </form>
                            <div className="text-center mt-4">
                                <p className="text-muted">
                                    Already have an account?{" "}
                                    <span
                                        className="text-primary fw-bold"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => dispatch(openLoginModal())}
                                    >
                                        Login here
                                    </span>
                                </p>
                                <p className="text-muted small">
                                    Want to list your property? <Link to="/register/owner">Register as Owner</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterCustomer;
