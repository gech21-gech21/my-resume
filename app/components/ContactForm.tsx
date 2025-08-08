"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormData, FormStatus } from "./types/contact";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setStatus({ message: "Sending message...", type: "info" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({
        message: "Message sent successfully!",
        type: "success",
      });
      reset();
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        message: "Failed to send message. Please try again later.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-400 mx-auto p-6 mb-0 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Contact Me
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
        <div className="block justify-center items-center">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name :
              <input
                id="name"
                type="text"
                {...register("name")}
                className={`w-2/3 px-4 py-4  ml-4  shadow-lg bg-white border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Your name"
              />{" "}
            </label>
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              your Email :
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`w-2/3 px-4 py-4 border ml-5 rounded-md shadow-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="your email"
              />{" "}
            </label>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              your Message{" "}
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              className={`w-2/3 px-4 py-2 shadow-lg bg-white border ml-17 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Your message here..."
            />{" "}
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-1/3 px-6 py-3 mt-5 shadow-[3px_5px_4px_3px_rgba(0,0,0,0.1)] text-white font-medium rounded-md transition-colors ${
                isSubmitting
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>

        {status && (
          <div
            className={`p-4 rounded-md ${
              status.type === "success"
                ? "bg-green-100 text-green-800"
                : status.type === "error"
                ? "bg-red-100 text-red-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}
