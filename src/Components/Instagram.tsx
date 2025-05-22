import igVideo from "/Shared_Assets/ig_video.mp4";


function Instagram() {
  return (
    <>
      {/* Main content with max-width container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 md:pt-[30px]">
        {/* Heading */}
        <h3 className="text-2xl md:text-3xl font-bold mb-2 font-neue-Plak-Bold">
          What's happening on Instagram
        </h3>
        <p className="text-sm md:text-base text-gray-600 mb-6 font-neue-Plak-Regular">
          Don't miss out on the latest news and updates from Under Armour.
        </p>

        {/* Instagram Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-2 sm:gap-4">
          {/* Large Video - responsive span */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-6 row-span-2 relative aspect-square">
            <video
                          src={igVideo}
                          
              className="w-full h-full object-cover "
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          {/* Top-right image 1 */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 row-span-1 relative aspect-square">
            <img
              src="/Desktop Assets/Rock_Sleeve_Desktop.jpg"
              srcSet="/Mobile_Assets/Rock_Sleeve_Mobile.jpg 480w, /Desktop Assets/Rock_Sleeve_Desktop.jpg 800w"
              sizes="(max-width: 640px) 480px, 800px"
              alt="Instagram post 1"
              className="w-full h-full object-cover "
              loading="lazy"
            />
          </div>

          {/* Top-right image 2 */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 row-span-1 relative aspect-square">
            <img
              src="/Desktop Assets/Raised_Hood_Desktop.jpg"
              srcSet="/Mobile_Assets/Raised_Hood_Mobile.jpg 480w, /Desktop Assets/Raised_Hood_Desktop.jpg 800w"
              sizes="(max-width: 640px) 480px, 800px"
              alt="Instagram post 2"
              className="w-full h-full object-cover "
              loading="lazy"
            />
          </div>

          {/* Bottom-right image 1 */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 row-span-1 relative aspect-square">
            <img
              src="/Desktop Assets/Jogger_Desktop.jpg"
              srcSet="/Mobile_Assets/Jogger_Mobile.jpg 480w, /Desktop Assets/Jogger_Desktop.jpg 800w"
              sizes="(max-width: 640px) 480px, 800px"
              alt="Instagram post 3"
              className="w-full h-full object-cover "
              loading="lazy"
            />
          </div>

          {/* Bottom-right image 2 */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 row-span-1 relative aspect-square">
         <img
  src="/Desktop Assets/Rock_Sleeveless_Desktop.jpg"
  srcSet="/Desktop Assets/Rock_Sleeveless_Desktop_480w.jpg 480w, /Desktop Assets/Rock_Sleeveless_Desktop.jpg 800w"
  sizes="(max-width: 640px) 480px, 800px"
  alt="Instagram post 4"
  className="w-full h-full object-cover"
  loading="lazy"
/>
          </div>
        </div>
      </div>

      {/* Full-width bottom div */}
      <div className="w-full min-h-[25rem] flex flex-col md:flex-row bg-[#D9D9D9]">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
          {/* Add content here if needed */}
       
        </div>
      </div>
    </>
  );
}

export default Instagram;