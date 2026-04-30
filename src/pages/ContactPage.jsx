import React from "react";
import Section from "../component/section/Section";
import Container from "../component/section/Container";
import { Link } from "react-router";

const ContactPage = () => {
  return (
    <Section className="py-10 md:py-16 lg:py-25">
      <Container>
        <div className="flex items-center gap-2 justify-start pb-20">
          <Link to="/" className="text-slate-300">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <Link to="/contact" className="text-slate-300">
            Contact
          </Link>
        </div>
        <form className="px-4 mt-6">
          <div className=" mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <div className="relative">
                <label
                  htmlFor="first-name"
                  className="absolute -top-2 left-4 bg-white px-1.5 text-xs font-medium text-slate-900 "
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="John Smith"
                  required
                  className="block w-full px-4 py-3 text-sm text-slate-900 dark:text-white bg-transparent rounded-md outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="last-name"
                  className="absolute -top-2 left-4 bg-white px-1.5 text-xs font-medium text-slate-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Doe"
                  required
                  className="block w-full px-4 py-3 text-sm text-slate-900 dark:text-white bg-transparent rounded-md outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-4 bg-white px-1.5 text-xs font-medium text-slate-900"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@readymadeui.com"
                  required
                  className="block w-full px-4 py-3 text-sm text-slate-900 dark:text-white bg-transparent rounded-md outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="phone"
                  className="absolute -top-2 left-4 bg-white px-1.5 text-xs font-medium text-slate-900"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="+11800-259-854"
                  required
                  className="block w-full px-4 py-3 text-sm text-slate-900 dark:text-white bg-transparent rounded-md outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="state"
                  className="absolute -top-2 left-4 bg-white px-1.5 text-xs font-medium text-slate-900"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="New York"
                  required
                  className="block w-full px-4 py-3 text-sm text-slate-900 dark:text-white bg-transparent rounded-md outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="city"
                  className="absolute -top-2 left-4 bg-white px-1.5 text-xs font-medium text-slate-900"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Manhattan"
                  required
                  className="block w-full px-4 py-3 text-sm text-slate-900 dark:text-white bg-transparent rounded-md outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>

              <div className="relative col-span-full">
                <label
                  htmlFor="street"
                  className="absolute -top-2 left-4 bg-white px-1.5 text-xs font-medium text-slate-900"
                >
                  Street address
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="123 Main Street"
                  required
                  className="block w-full px-4 py-3 text-sm text-slate-900 dark:text-white bg-transparent rounded-md outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>

              <div className="flex items-start col-span-full">
                <label className="flex items-center group has-[input:checked]:text-slate-900">
                  <input
                    id="tmc"
                    name="tmc"
                    type="checkbox"
                    required
                    className="sr-only"
                  />
                  {/* Custom box */}
                  <span
                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-blue-600 group-has-[input:checked]:outline-blue-600 group-focus-within:outline-2 group-focus-within:outline-blue-600"
                    aria-hidden="true"
                  >
                    {/* Checkmark */}
                    <svg
                      className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                      viewBox="0 0 12 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 5l3 3 7-7" />
                    </svg>
                  </span>
                  <span className="ml-3 text-sm text-slate-600">
                    I accept the
                  </span>
                </label>

                <a
                  href="#"
                  className="ml-1 text-sm font-medium text-blue-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Submit Form
            </button>
          </div>
        </form>
      </Container>
    </Section>
  );
};

export default ContactPage;
