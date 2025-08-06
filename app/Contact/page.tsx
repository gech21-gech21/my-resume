// app/contact/page.tsx
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Have a question or want to work together? Send me a message!
          </p>
        </div>

        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
