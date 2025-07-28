
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center px-4 text-center bg-cover bg-center bg-[url('/hero.png')]"
    >
      <motion.div
        className="w-full max-w-4xl py-16 sm:py-24"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Transform Your Photos into
        </p>
        <p className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4 leading-tight">
          Ghibli Art with Artify.AI
        </p>

        <div className="py-6">
          <p className="text-base sm:text-lg font-normal">
            Experience the magic of Studio Ghibli's artistic style with Artify's
          </p>
          <p className="text-base sm:text-lg font-normal">
            image generator tool.
          </p>
        </div>

        <button className="text-lg sm:text-xl font-bold bg-orange-300 hover:bg-orange-400 px-6 py-3 rounded-md">
          Try Artify AI
        </button>
      </motion.div>
    </div>
  );
};

export default Home;
