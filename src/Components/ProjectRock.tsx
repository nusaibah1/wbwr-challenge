import bgimage from "/Desktop Assets/Project_Rock_Cluster_Desktop.jpg";

function ProjectRock() {
  return (
    <div className="relative px-4 md:px-20 py-5 md:py-[30px]">
      {/* Image container (now 450px tall) */}
      <div 
        className="w-full min-h-[450px] bg-cover bg-center" // Removed md:min-h-[700px]
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        {/* Empty space for desktop layout */}
        <div className="hidden md:block w-full h-full grid grid-cols-2">
          <div></div>
          <div></div>
        </div>
      </div>
      
      {/* Overlay Content (now aligned to 450px height) */}
      <div className="md:absolute md:top-0 md:right-0 md:h-[450px] md:w-1/2 md:flex md:items-center">
        <div className="p-8 md:p-10 lg:p-[4rem] bg-white md:bg-transparent text-black md:text-white">
          <h3 className="text-base font-bold mb-[10px] font-neue-Plak-Bold md:text-right">
            Project Rock
          </h3>
          
          <h1 className="text-[32px] md:text-[48px] font-bold mb-[15px] uppercase leading-[1.2] font-neue-Plak-CondBlack text-left md:text-right">
            EVERY SIDE OF STRONG
          </h1>
          
          <p className="text-sm leading-[1.5] mb-[20px] font-neue-Plak-Regular max-w-md md:max-w-sm text-left md:text-right">
            The Underground collection is inspired by the idea of a Project Rock training camp. 
            A place where we push each other harder to make each other stronger.
          </p>
          
          <div className="flex justify-start md:justify-end">
            <button className="bg-black md:bg-transparent border border-black md:border-white text-white px-6 py-3 text-base uppercase cursor-pointer font-neue-Plak-Regular">
              Shop Project Rock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectRock;