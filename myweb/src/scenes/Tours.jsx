import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Tours = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="tours" className="pt-10 pb-24">
 

      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            Tour Dates <span className="text-[#34920e]">2023</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 font-playfair">
            Tickets: <span className = "py-1 w-50 hover:underline" ><a href="https://macroblank.net/" >macroblank.net</a></span></p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-[#34920e] before:z-[-1]"
            >
              <img
                alt="Tours"
                className="z-10"
                src="assets/cover.jpeg"
              />
            </div>
          ) : (
            <img alt="tours" className="z-10" src="assets/cover.jpeg" />
          )}
        </div>
      </div>


      <div className="md:flex md:justify-between mt-16 gap-32">
   
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03/01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Paris, France
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-[#34920e] absolute right-0 top-0 z-[-1]" />
          </div>

          <div>
            <p className="mt-5">Venue: Accor Arena</p>
            <p className="">Address: 8 Bd de Bercy, 75012 Paris, France</p>
            <a href="https://macroblank.net/collections/all">
              <button className="bg-white mt-10 ml-5 text-black 
              font-semibold rounded-sm w-40 text-1xl h-10 center hover:underline">Get tickets</button>
            </a>
          </div>

        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03/16</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                London, United Kingdom
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-[#34920e] absolute right-0 top-0 z-[-1]" />
          </div>
          <div>
            <p className="mt-5">The 02 Academy Brixton </p>
            <p className="">211 Stockwell Road, SW9 9SL London, United Kingdom</p>
            <a href="https://macroblank.net/collections/all">
              <button className="bg-white mt-10 ml-5 text-black 
              font-semibold rounded-sm w-40 text-1xl h-10 center hover:underline">Get tickets</button>
            </a>
          </div>

        </motion.div>
    
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03/25</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Barcelona, Spain
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-[#34920e] absolute right-0 top-0 z-[-1]" />
          </div>
          <div>
            <p className="mt-5">Razzmatazz</p>
            <p className="">C/ dels Almogàvers, 122, 08018 Barcelona, Spain</p>
            <a href="https://macroblank.net/collections/all">
              <button className="bg-white mt-10 ml-5 text-black 
              font-semibold rounded-sm w-40 text-1xl h-10 center hover:underline">Get tickets</button>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Tours;