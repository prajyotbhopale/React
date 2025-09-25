import React from "react";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* 🔹 Top Image Section */}
      <div className="flex justify-center items-center mt-10">
  <img
    src="https://media.istockphoto.com/id/2233697481/photo/contact-us-icons-on-wooden-blocks-showing-chat-phone-email-and-internet-symbols-business.jpg?s=612x612&w=0&k=20&c=O5maNC4P8umOjn4bEd-IPg5K7swGovcnHZqPE0VM1bg="
    alt="Contact"
    className="w-160"
  />
</div>


      {/* 🔹 Middle Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto py-12 px-6">
        
        {/* Left Contact Info */}
        <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Get in touch:
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-2">
            Fill in the form to start a conversation
          </p>

          <div className="mt-6 space-y-4 text-gray-700">
            <p><strong>Address:</strong> Acme Inc, Street, State, Postal Code</p>
            <p><strong>Phone:</strong> +44 1234567890</p>
            <p><strong>Email:</strong> info@acme.org</p>
          </div>
        </div>


        {/* Right Contact Form */}
        <form className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md">
          <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="mt-2 py-3 px-3 rounded-lg border border-gray-400 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="mt-2 py-3 px-3 rounded-lg border border-gray-400 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="tel" className="hidden">
              Telephone
            </label>
            <input
              type="tel"
              id="tel"
              placeholder="Telephone Number"
              className="mt-2 py-3 px-3 rounded-lg border border-gray-400 focus:border-orange-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full md:w-40 bg-orange-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
