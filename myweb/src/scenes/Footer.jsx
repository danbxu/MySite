
const Footer = () => {
  return (
    <footer className="h-80 bg-green pt-10">
      <div className="w-10/12 mx-auto">
        
        <div className="md:flex justify-center md:justify-between text-start">
          <p className="font-playfair font-semibold text-2xl text-[#FBFBFB]">MACRO<p className="text-[#36a0c3]">BLANK</p>
          </p>
        </div>

          <div className="text-left font-playfair text-sm md:text-start">
            <p className="py-1 w-20 hover:underline" ><a href="https://macroblank.net/" >macroblank.net</a></p>
            <p className="py-1 w-20 hover:underline" ><a href="https://soundcloud.com/macroblank">Twitter</a></p>
            <p className="py-1 w-20 hover:underline" ><a href="https://www.youtube.com/@Macroblank" >Youtube</a></p>
            <p className="py-1 w-20 hover:underline" ><a href="https://bandcamp.com/recommended/macroblank?from=sbarrec" >Recommendations</a></p>
          </div>

          <div className="pt-15 md:flex md:justify-left text-left relative justify-left 
          font-playfair font-semibold text-.5xl text-[#FBFBFB] pt-5"
        >
          <p>©2023 MACROBLANK. All Rights Reserved.</p>
        </div>
          
      </div>
    </footer>
  );
};

export default Footer;