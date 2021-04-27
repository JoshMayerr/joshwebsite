import React from "react";
import { useForm } from "react-hook-form";
import Nav from "../components/Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import emailjs from "emailjs-com";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  console.log(errors);
  const toastifySuccess = () => {
    toast.dark("Contact Form sent!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "dark",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    // Send form email
    try {
      const templateParams = {
        name: data.Name,
        email: data.Email,
        message: data.Message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Nav activeLink={"Contact Me"}>
      <div className="flex flex-col items-center mb-36 ">
        <ToastContainer />
        <h1 className="font-body text-8xl tracking-wide text-center mt-4 sm:mt-8">
          Contact Me
        </h1>
        <div className=" px-4 overflow-hidden sm:px-6 lg:px-8 w-full ">
          <div className=" max-w-lg mx-auto">
            <div className="mt-12">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <label htmlFor="Name" className="block text-sm font-medium ">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      {...register("Name", {
                        required: true,
                        maxLength: 80,
                      })}
                      type="text"
                      name="Name"
                      id="Name"
                      defaultValue={""}
                      autoComplete="given-name"
                      placeholder="John Doe"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:border-white bg-transparent border-black border-2 rounded-md"
                    />
                    {errors.Name && "Name is required"}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium ">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="Email"
                      id="Email"
                      autoComplete="email"
                      {...register("Email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-black border-2 dark:border-white bg-transparent rounded-md placeholder-gray-500"
                      placeholder="john@doe.com"
                    />
                    {errors.Email && "Email is required and must be valid"}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium "
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500  dark:border-white bg-transparent border-black border-2 rounded-md"
                      defaultValue={""}
                      placeholder="My message to Josh..."
                      {...register("Message", { required: true })}
                    />
                    {errors.Message && "Message is required"}
                  </div>
                </div>
                <div className="sm:col-span-2 mt-4">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md  text-base font-medium  text-white bg-gradient-to-r from-indigo-500 to-pink-300 hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Let's talk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
}
