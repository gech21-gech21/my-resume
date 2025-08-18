"use client";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="mt-4 text-xl text-gray-600">
            Have a question or want to work together? Send me a message!
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <Image
              src="/viber.png"
              width={40}
              height={40}
              alt="phone icon"
              className="object-contain"
            />
            <p className="font-bold text-2xl text-gray-800">+251931059567</p>
          </div>

          <div className="flex items-center justify-center gap-3 mt-4">
            <Image
              src="/email.png"
              width={40}
              height={40}
              alt="email icon"
              className="object-contain"
            />
            <p className="font-bold text-2xl text-gray-800">
              fikadegetahun695@gmail.com
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
