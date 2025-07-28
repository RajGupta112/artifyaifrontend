
import { FaEye } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import { CgStyle } from 'react-icons/cg';
import { MdCloudUpload } from "react-icons/md";
import { FiDownloadCloud } from "react-icons/fi";
import { RiMagicLine } from "react-icons/ri";
const Features = () => {
  return (
    <div className="pt-20 mx-7">
      <h1 className="text-2xl text-center text-black font-bold mb-20">
        Artify AI Features
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      
        <div className="flex flex-col flex-1 rounded-2xl p-8 bg-gray-100 shadow-md hover:bg-[url('/hero.png')]">
          <FaEye className="rounded-full text-4xl bg-green-50 p-2 hover:bg-green-100 self-start mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            High Accuracy Ghibli Art Generation
          </h3>
          <p className="text-md text-gray-700">
            Our advanced Artify algorithms ensure your photos maintain their
            essence while transforming into authentic Studio Ghibli art style.
            Every image preserves the original character while adopting the
            distinctive Ghibli aesthetic.
          </p>
        </div>

       
        <div className="flex flex-col flex-1 rounded-2xl p-8 bg-gray-100 shadow-md hover:bg-[url('/hero.png')]">
          <BsStars className="rounded-full text-4xl bg-green-50 p-2 hover:bg-green-100 self-start mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Image Processing</h3>
          <p className="text-md text-gray-700">
            Get your Ghibli art images in seconds with our optimized Artify AI
            generator technology. Our efficient processing ensures quick
            delivery of high-quality Studio Ghibli-style artwork.
          </p>
        </div>

      
        <div className="flex flex-col flex-1 rounded-2xl p-8 bg-gray-100 shadow-md hover:bg-[url('/hero.png')]">
          <CgStyle className="rounded-full text-4xl bg-green-50 p-2 hover:bg-green-100 self-start mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Stunning Studio Ghibli Quality
          </h3>
          <p className="text-md text-gray-700">
            Our Ghibli AI creates beautiful, high-resolution art that perfectly
            captures the magical Studio Ghibli aesthetic. Every detail in your
            generated image reflects the authentic charm of the Studio Ghibli
            world.
          </p>
        </div>
        <div className="flex flex-col flex-1 rounded-2xl p-8 bg-gray-100 shadow-md hover:bg-[url('/hero.png')]">
  <MdCloudUpload className="rounded-full text-4xl bg-green-50 p-2 hover:bg-green-100 self-start mb-4" />
  <h3 className="text-xl font-semibold mb-2">Easy Image Upload</h3>
  <p className="text-md text-gray-700">
    Upload your own photos or prompts with ease. Just drag and drop—or paste a description—and let the AI transform your ideas into whimsical Ghibli-style masterpieces.
  </p>
</div>

<div className="flex flex-col flex-1 rounded-2xl p-8 bg-gray-100 shadow-md hover:bg-[url('/hero.png')]">
  <FiDownloadCloud className="rounded-full text-4xl bg-green-50 p-2 hover:bg-green-100 self-start mb-4" />
  <h3 className="text-xl font-semibold mb-2">High-Quality Downloads</h3>
  <p className="text-md text-gray-700">
    Instantly download your generated art in high resolution. Perfect for prints, wallpapers, or sharing with friends—your Ghibli-style images are yours to keep forever.
  </p>
</div>

<div className="flex flex-col flex-1 rounded-2xl p-8 bg-gray-100 shadow-md hover:bg-[url('/hero.png')]">
  <RiMagicLine className="rounded-full text-4xl bg-green-50 p-2 hover:bg-green-100 self-start mb-4" />
  <h3 className="text-xl font-semibold mb-2">Creative Prompt Support</h3>
  <p className="text-md text-gray-700">
    Not sure where to start? Use our prompt suggestions to spark inspiration. Whether it's a forest spirit or a flying town, let the AI bring your imagination to life.
  </p>
</div>

      </div>
    </div>
  );
};

export default Features;
