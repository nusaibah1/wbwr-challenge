const Header = () => {
  return (
    <>
      <div className="w-full min-h-[2rem] flex flex-col md:flex-row bg-[#D9D9D9]">
       
      </div>
      
      {/* Desktop Layout - Video with Overlay */}
      <div className="w-full relative hidden md:flex min-h-[35rem]">
        <video
          className="absolute w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
        >
          <source src="/Desktop Assets/Header_Video_Desktop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay container */}
        <div className="relative z-10 w-full flex justify-end">
          <div className="w-full md:w-1/3 bg-black/50 pr-[10em] py-12 pl-8"> 
            <div className="max-w-[400px]"> 
              {/* Desktop Heading */}
              <h1 className="text-[105px] font-neue-Plak-CondBlack text-black leading-tight">
                <span className="block">CHECK</span>
                <span className="block">OUT OUR</span>
                <span className="block">LATEST</span>
                <span className="block">GEAR</span>
              </h1>
              
              {/* Desktop Paragraph */}
              <p className="text-black font-neue-Plak-Regular text-xs mt-4">
                Advanced tech, superior comfort and all performance is what our latest UA gear is all about.
                Built to go further, push harder and break boundaries.
              </p>
              
              {/* Desktop Button */}
              <div className="mt-6">
                <button className="px-6 py-3 bg-black text-white font-neue-Plak-Regular text-sm hover:bg-gray-200 transition rounded-sm">
                  Shop UA New Arrivals
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Video Above, Content Below */}
      <div className="w-full block md:hidden">
        {/* Mobile Video */}
        <div className="w-full relative aspect-[9/16]">
          <video
            className="absolute w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/Mobile_Assets/Header_Video_Mobile.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Mobile Content*/}
        <div className="w-full px-6 py-12 bg-white"> 
          <div className="max-w-md mx-auto"> {/* Centered container */}
            <div className="text-center">
              <h1 
                className="font-neue-Plak-CondBlack text-black leading-tight font-extrabold"
                style={{ fontSize: 'clamp(2.5rem, 12vw, 6.5rem)' }}
              >
                <span className="block">CHECK</span>
                <span className="block">OUT OUR</span>
                <span className="block">LATEST</span>
                <span className="block">GEAR</span>
              </h1>
            </div>
            
            <p className="text-black font-neue-Plak-Regular text-sm leading-relaxed mt-6">
              Advanced tech, superior comfort and all performance is what our latest UA gear is all about.
              Built to go further, push harder and break boundaries.
            </p>
            
            <div className="mt-8 text-center">
              <button className="px-8 py-4 bg-black text-white font-neue-Plak-Regular text-sm hover:bg-gray-800 transition rounded-sm w-full">
                Shop UA New Arrivals
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;