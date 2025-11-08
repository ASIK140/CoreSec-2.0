export default function Hero() {
  return (
    <section className="px-8 md:px-20 py-24 bg-[url('/assets/bg.jpg')] bg-cover bg-center h-screen">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight text-gray-900">
          Empowering
          <br />
          <span className="text-red-600">Businesses</span> &
          <span className="text-red-600"> Minds</span>
          <br />
          Through <span className="text-black">Technology</span>
        </h1>

        <p className="text-gray-600 mt-4 text-base md:text-lg">
          From IT solutions to expert-led training, we help companies and
          individuals stay ahead in the digital era.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all">
            Our Services
          </button>
          <button className="border border-red-500 text-red-600 px-6 py-3 rounded-full hover:bg-red-50 transition-all">
            Our Training
          </button>
        </div>
      </div>
    </section>
  );
}
