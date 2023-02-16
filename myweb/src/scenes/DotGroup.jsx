import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-red before:absolute before:w-6 before:h-6 
    before:border-2 before:border-white before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#discover"
        className={`${
          selectedPage === "discover" ? selectedStyles : "bg-[#1C1E28]"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("discover")}
      />

      <AnchorLink
        href="#tours"
        className={`${
          selectedPage === "tours" ? selectedStyles : "bg-[#1C1E28]"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("tours")}
      />

      <AnchorLink
        href="#releases"
        className={`${
          selectedPage === "releases" ? selectedStyles : "bg-[#1C1E28]"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("releases")}
      />

      <AnchorLink
        href="#colloborations"
        className={`${
          selectedPage === "colloborations" ? selectedStyles : "bg-[#1C1E28]"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("colloborations")}
      />

      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-[#1C1E28]"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;