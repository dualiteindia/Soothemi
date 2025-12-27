import React from "react";
import { Flower, Phone, Mail, Instagram, ChevronDown } from "lucide-react";
import { SectionReveal } from "../components/SectionReveal";

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-soothe-bg">
      {/* SECTION 1: CONTACT HERO CONTAINER */}
      <SectionReveal>
        <section className="w-full px-4 md:px-10 pt-6 pb-20">
          <div className="relative w-full min-h-[700px] rounded-[2.5rem] overflow-hidden shadow-soft flex items-center">
            {/* Background Image - UPDATED */}
            <img
              src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/freepik__retouch__84682.webp"
              alt="Warm beige interior with plant shadows"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-12">
              {/* LEFT COLUMN: CONTACT INFORMATION */}
              <div className="text-white">
                <h1 className="font-serif text-5xl md:text-[4.5rem] leading-[1.1] mb-6">
                  Get in touch with <br />
                  <span className="inline-flex items-center gap-3">
                    <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-soothe-pink flex items-center justify-center shrink-0">
                      <Flower
                        size={20}
                        strokeWidth={1.5}
                        className="text-soothe-pinkIcon"
                      />
                    </span>
                    <span className="italic font-normal">Soothemi</span>
                  </span>
                </h1>

                <p className="font-sans text-white/90 text-base mb-12 max-w-md">
                  Feel free to reach out, and we'll get back to you as soon as
                  possible.
                </p>

                <div className="flex flex-col gap-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-soothe-pink flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-soothe-pinkIcon" />
                    </div>
                    <span className="font-serif text-lg text-white tracking-wide">
                      +872 198 192 8313
                    </span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-soothe-pink flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-soothe-pinkIcon" />
                    </div>
                    <span className="font-serif text-lg text-white tracking-wide">
                      hello@soothemi.yoga
                    </span>
                  </div>

                  {/* Social */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-soothe-pink flex items-center justify-center shrink-0">
                      <Instagram size={18} className="text-soothe-pinkIcon" />
                    </div>
                    <span className="font-serif text-lg text-white tracking-wide">
                      @soothemi
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: CONTACT FORM CARD */}
              <div className="w-full max-w-lg ml-auto">
                <div className="bg-white rounded-[1.5rem] p-8 md:p-10 shadow-lg">
                  <h2 className="font-serif text-3xl text-soothe-text mb-8">
                    Send us a message
                  </h2>

                  <form className="flex flex-col gap-5">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="font-sans text-sm text-soothe-text font-medium"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soothe-pink focus:ring-1 focus:ring-soothe-pink transition-colors font-sans text-sm placeholder:text-gray-400"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="font-sans text-sm text-soothe-text font-medium"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soothe-pink focus:ring-1 focus:ring-soothe-pink transition-colors font-sans text-sm placeholder:text-gray-400"
                      />
                    </div>

                    {/* Services Dropdown */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="service"
                        className="font-sans text-sm text-soothe-text font-medium"
                      >
                        Services
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soothe-pink focus:ring-1 focus:ring-soothe-pink transition-colors font-sans text-sm text-soothe-text appearance-none bg-white cursor-pointer"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select services
                          </option>
                          <option value="beginner">Beginner Classes</option>
                          <option value="power">Power Yoga</option>
                          <option value="restorative">Restorative Yoga</option>
                          <option value="custom">Custom Plan</option>
                        </select>
                        <ChevronDown
                          size={16}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="message"
                        className="font-sans text-sm text-soothe-text font-medium"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Type something here"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-soothe-pink focus:ring-1 focus:ring-soothe-pink transition-colors font-sans text-sm placeholder:text-gray-400 resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      name="submit button" 
                      type="button"
                      className="w-full py-4 mt-2 rounded-full bg-soothe-pink text-soothe-text font-medium text-sm hover:bg-[#ffcdd9] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>
    </div>
  );
};
