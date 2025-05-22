import { Fragment, useState, useEffect, useRef } from "react";

// Define TypeScript interfaces
interface CategoryItem {
  name: string;
  image: string;
}

function Categories() {
  
  const items: CategoryItem[] = [

    { name: "TRAIN", image: "/Shared_Assets/Train.jpg" },
    { name: "RUN", image: "/Shared_Assets/Run.jpg"},
    { name: "GOLF", image: "/Shared_Assets/Golf.jpg" },
    { name: "ACCESSORIES", image: "/Shared_Assets/Accessories.jpg" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  
  // Check if the screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleClick = (index: number) => {
    console.log("Clicked index:", index);
    setSelectedIndex(index);
  };
  
  const navigateCarousel = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'next' && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.85;
      carouselRef.current.scrollTo({
        left: direction === 'next' 
          ? carouselRef.current.scrollLeft + scrollAmount 
          : carouselRef.current.scrollLeft - scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  // Mouse/touch event handlers for dragging functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
    
    // Snap to closest item after dragging
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth * 0.85;
      const index = Math.round(carouselRef.current.scrollLeft / itemWidth);
      setCurrentIndex(Math.min(Math.max(index, 0), items.length - 1));
    }
  };

  return (
    <Fragment>
      <div className="text-left my-5">
        <h2 className="text-2xl  pl-20 font-neue-Plak-Bold">
          Our best gear
        </h2>
        <p className="text-sm font-neue-Plak-Regular pl-20">
          Unlock your potential with the best UA gear
        </p>
      </div>
      
 {/* Desktop view  */}
{!isMobile && (
  <div className="flex justify-between gap-2 mx-5 mb-10">
    {items.map((item, index) => (
      <div
        key={item.name}
        onClick={() => handleClick(index)}
        className="w-1/4 text-left cursor-pointer px-12 box-border flex flex-col"
      >
        <div className="relative pb-[100%] min-h-[300px]"> {/* Aspect ratio container */}
          <img
            src={item.image}
            alt={item.name}
            className="absolute w-full h-full object-cover"
            style={{ minHeight: '300px' }}
          />
        </div>
        <p className="text-sm text-black my-1 underline font-semibold font-neue-Plak-SemiBold">
          Shop Now
        </p>
      </div>
    ))}
  </div>
)}

 {/* Mobile carousel view */}
{isMobile && (
  <div className="relative px-4">

    <div 
      ref={carouselRef}
      className="flex overflow-x-auto snap-x scroll-smooth"
    >
      {items.map((item, index) => (
        <div
          key={item.name}
          className="flex-none w-4/5 px-2 snap-center"
        >
          <div 
            onClick={() => handleClick(index)}
            className="cursor-pointer text-center"
          >
            <div className="relative pb-[120%] min-h-[250px]"> {/* Aspect ratio container */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute w-full h-full object-cover"
                style={{ minHeight: '250px' }}
              />
            </div>
            <p className="text-sm text-black my-1 underline font-semibold">
              Shop Now
            </p>
          </div>
        </div>
      ))}
    </div>
        <button 
            onClick={() => navigateCarousel('next')}
            disabled={currentIndex === items.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black rounded-full p-2 ${currentIndex === items.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          
        </div>
      )}
    </Fragment>
  );
}

export default Categories;