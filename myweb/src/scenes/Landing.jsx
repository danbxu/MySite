import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({setSelectedPage}) => {
    const IsAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <div>
            <section 
                id="discover" 
                // {/* flex page */}
                className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

                {/* image first */}
                <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                    {IsAboveMediumScreens ? (
                        <div>
                            <img
                                alt="profile"
                                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                                max-w-[400px] md:max-w-[600px]"
                                src="assets/jams.jpeg"
                            />
                        </div> 
                    ): (
                        <img
                        alt="profile"
                        className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                        max-w-[400px] md:max-w-[600px]"
                        src="assets/jams.jpeg"
                    />                 
                    )}
                    </div>

                    {/* mainsection */}
                    <div className="z-30 basis-2/5 mt-12 md:mt-32">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once : true, amount : 0.5 }}
                            transition= {{ duration : 0.5}}
                            variants = {{
                                hidden : {opacity: 0, x : -50},
                                visible : { opacity : 1, x : 0 }
                            }}
                        >
                            <p className="text-6xl font-playfair z-10 text-center md:text-start">
                                Valentine's Day  {""}
                                <span
                                className="text-red xs:relative xs:text-red xs:font-semibold pl-10">Release
                                </span>
                            </p>
                            <p className="mt-10 mb-4 text-4xl text-center font-playfair md:text-start">
                                バレンタイン・デー
                            </p>

                            <div className="pt-20 text-left font-playfair text-sm md:text-start">
                                <p className="py-1 w-20 hover:underline" ><a href="https://macroblank.net/" >macroblank.net</a></p>
                                <p className="py-1 w-20 hover:underline" ><a href="https://soundcloud.com/macroblank">Twitter</a></p>
                                <p className="py-1 w-20 hover:underline" ><a href="https://www.youtube.com/@Macroblank" >Youtube</a></p>
                                <p className="py-1 w-20 hover:underline" ><a href="https://bandcamp.com/recommended/macroblank?from=sbarrec" >Recommendations</a></p>
                            </div>
                            
                        </motion.div>


                        {/* call to actions */}
                        <motion.div
                            className="flex mt-5 justify-center md:justify-start"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once : true, amount : 0.5 }}
                            transition= {{delay: 0.2,duration : 0.5}}
                            variants = {{
                                hidden : {opacity: 0, x : -50},
                                visible : { opacity : 1, x : 0 }
                            }}
                        >
                            {/* <AnchorLink
                                className="bg-[#817e7e] text-deep-blue rounded-sm py-3 px-7 font-semibold
                                hover:bg-deep-blue hover:text-white transition duration-500"
                                onClick={() => setSelectedPage("newsletter")}
                                href="#newsletter"
                            >
                                Follow
                            </AnchorLink> */}
                        </motion.div>

                        <motion.div
                            className="flex mt-5 justify-center columns-1 md:justify-start"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once : true, amount : 0.5 }}
                            transition= {{delay: 0.4, duration : 0.5}}
                            variants = {{
                                hidden : {opacity: 0, x : -50},
                                visible : { opacity : 1, x : 0 }
                            }}>

                        </motion.div>

                    </div>
            </section>
            <AnchorLink
                className="bg-transparent fixed text-white rounded-sm py-2 px-5 font-semibold
                    hover:bg-white bottom-5 right-5 hover:text-black transition duration-500 z-40"
                onClick={() => setSelectedPage("discover")}
                href="#discover"> top
            </AnchorLink> 
        </div>

    )
}

export default Landing;

{/* <AnchorLink
className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
    hover:bg-blue hover:text-white transition duration-500"
onClick={() => setSelectedPage("contact")}
href="#home"> hello
</AnchorLink> */}