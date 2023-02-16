import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const titles = [
  `ス​ロ​ー JAMS`,
  `デ​ス​ウ​ィ​ッ​シ​ュ`,
  `分​離​さ​れ​た`,
  `ANALOG レ​ア​リ​テ​ィ`,
  `OCCULT`,
  `MACABRE`,
  `至​福​を​通​じ​た​平​和`,
  `ご​め​ん​と​言​っ​て lp`,
];
const linksToMacro = [
  `https://macroblank.bandcamp.com/album/jams`,
  `https://macroblank.bandcamp.com/album/--14`,
  `https://macroblank.bandcamp.com/album/--24`,
  `https://macroblank.bandcamp.com/album/analog`,
  `https://macroblank.bandcamp.com/album/occult`,
  `https://macroblank.bandcamp.com/album/macabre`,
  `https://macroblank.bandcamp.com/album/--20`,
  `https://macroblank.bandcamp.com/album/lp-3`
];

const Project = ({ title, photo, linkToMacro }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center font-semibold hover:underline p-16 text-[#000000]`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          <a href={linkToMacro}>Buy Now</a>
        </p>
      </div>
      {/* <img src={photoLink} alt={title}/> */}
      <img src={photo} alt={title} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="releases" className="pt-48 pb-48">


      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">RECENT</span> RELEASES
          </p>
          <div className="flex justify-center mt-5">
          </div>
        </div>
      </motion.div>


      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
 
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[800px] max-h-[800px] text-6xl font-playfair font-semibold"
          >
            MACRO
          </div>
          <Project title={titles[0]} photo={`../assets/jams.jpeg`} linkToMacro ={linksToMacro[0]}/>
          <Project title={titles[1]} photo={`../assets/jams2.jpeg`} linkToMacro ={linksToMacro[1]}/>

      
          <Project title={titles[2]} photo={`../assets/jams3.jpeg`} linkToMacro ={linksToMacro[2]}/>
          <Project title={titles[3]} photo={`../assets/jams4.jpeg`} linkToMacro ={linksToMacro[4]}/>

     
          <Project title={titles[5]} photo={`../assets/jams5.jpeg`} linkToMacro ={linksToMacro[5]}/>
          <Project title={titles[6]} photo={`../assets/jams6.jpeg`} linkToMacro ={linksToMacro[6]}/>
          <Project title={titles[7]} photo={`../assets/jams7.jpeg`} linkToMacro ={linksToMacro[7]}/>
          <div
            className="flex justify-center text-center items-center p-10 bg-green
              max-w-[800px] max-h-[800px] text-6xl font-playfair font-semibold"
          >
            BLANK
          </div>
        </motion.div>
      </div>
      <div className="text-left w-20 text-2xl mt-10 font-playfair hover:underline">
        <a href="https://macroblank.bandcamp.com/music">See all</a>
      </div>
    </section>
  );
};

export default Projects;
