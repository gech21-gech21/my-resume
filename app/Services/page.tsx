export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="mt-5 text-center font-bold text-3xl mb-4">Services</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Contact me if you need any of the following services you will receive
          a prompt response!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white text-black hover:text-white sm:animate-slideInLeft hover:bg-black hover:border-blue-500 border border-transparent transition-colors duration-300 p-6 rounded-lg shadow-md">
          <h1 className="font-bold text-xl mb-3">Web Development</h1>
          <p className="text-base">
            I build responsive and modern websites tailored to your specific
            needs.
          </p>
        </div>

        <div className="bg-white text-black hover:text-white sm:animate-slideInRightLong  hover:bg-black hover:border-blue-500 border border-transparent transition-colors duration-300 p-6 rounded-lg shadow-md">
          <h1 className="font-bold text-xl mb-3">Code Mentorship</h1>
          <p className="text-base">
            Personalized guidance to help beginners master coding fundamentals
            and overcome learning challenges.
          </p>
        </div>
      </div>
    </div>
  );
}
