import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {

  return (
    <section id="colloborations" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      > 
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          Collaborations
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10 text-3xl font-playfair">
          primed for 2023
        </p>
      </motion.div>


      <div className="md:flex md:justify-between gap-10">
        <motion.div
          className="mx-auto relative w-[450px] bg-green h-[200px] flex flex-col justify-end p-16 mt-20
            before:absolute before:top-[-120px] before:-ml-[110px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          
          <p className="text-center text-4xl font-playfair pb-4">
            BØRNS
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-green w-[450px] h-[200px] flex flex-col justify-end p-16 mt-20
          before:absolute before:top-[-120px] before:-ml-[110px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-4xl font-playfair pb-4">
            FKJ
          </p>
        </motion.div>
      </div>

      <div className="md:flex md:justify-between gap-10">
        <motion.div
          className="mx-auto relative w-[450px] h-[200px] bg-green flex flex-col justify-end p-16 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          
          <p className="text-center text-4xl font-playfair pb-4">
            NUJABES
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-green w-[450px] h-[200px] flex flex-col justify-end p-16 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-4xl font-playfair pb-4">
            GESAFFELSTEIN
          </p>
        </motion.div>
      </div>

      


    </section>
  );
};

export default Testimonials;