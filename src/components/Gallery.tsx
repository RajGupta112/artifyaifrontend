

const Gallery = () => {
  return (
    <div className="mt-20 px-4">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center text-black font-bold text-3xl mb-20">
          Magical Artify AI Transformations
        </h1>

        {/* Responsive vertical spacing between sections */}
        <div className="flex flex-col space-y-16 md:space-y-32">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/g1.png"
                alt="Restyled art"
                height={600}
                width={600}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="w-full md:w-1/2 text-left pt-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Restyler</h3>
              <h2 className="text-4xl font-bold text-black mb-4">
                Apply Studio Ghibli style to any image
              </h2>
              <p className="text-gray-600 leading-relaxed">
                With our AI Restyler feature, you can give your photos a magical makeover.
                Upload any picture and apply the iconic Studio Ghibli art style in seconds,
                infusing your images with AI whimsy. It's a fun way to see familiar sights
                through a new lens and an excellent tool for creating unique social media
                content or personalized art pieces.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-full md:w-1/2 text-left pt-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Image Generator</h3>
              <h2 className="text-4xl font-bold text-black mb-4">
                Craft magical Studio Ghibli posters
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Turn photos into your own Studio Ghibli posters effortlessly. Share your vision,
                and let our AI transform your ideas into captivating posters that capture the heart
                and soul of Studio Ghibli's artistry. Ideal for decorating your space with a magical flair,
                they bring a touch of Miyazaki’s wonder to any room.
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/indus.png"
                alt="Restyled art"
                height={600}
                width={600}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
