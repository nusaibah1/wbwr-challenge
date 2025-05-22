import { Fragment, useState, useEffect, useRef } from "react";
// Import images from public folder
import PromoOne from "/Shared_Assets/Promo(1).jpg";
import PromoTwo from "/Shared_Assets/Promo(2).jpg";
import PromoThree from "/Shared_Assets/Promo(3).jpg";
import PromoFour from "/Shared_Assets/Promo(4).jpg";

// Define TypeScript interface
interface PromoItem {
  name: string;
  image: string;
}

function Promotions() {
  const items: PromoItem[] = [
    { name: "PromoOne", image: PromoOne },
    { name: "PromoTwo", image: PromoTwo },
    { name: "PromoThree", image: PromoThree },
    { name: "PromoFour", image: PromoFour },
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
      <div className="text-left my-5 px-6 lg:px-20">
        <h2 className="text-2xl font-bold font-neue-Plak-Bold">
          Discover Our Latest Promotions
        </h2>
        <p className="text-black font-neue-Plak-Regular">
          Get the best deals on the best gear.
        </p>
      </div>

      {/* Desktop view - optimized for large screens */}
      {!isMobile && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-20">
          {items.map((item, index) => (
            <div
              key={item.name}
              onClick={() => handleClick(index)}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] w-full"> {/* Adjusted aspect ratio */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" // Lazy loading for better performance
                />
              </div>
             
            </div>
          ))}
        </div>
      )}

      {/* Tablet/Mobile carousel view */}
      {isMobile && (
        <div className="relative px-4">
          <button 
            onClick={() => navigateCarousel('prev')}
            disabled={currentIndex === 0}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/70 rounded-full p-2 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
           
          </button>
          
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x scroll-smooth space-x-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {items.map((item, index) => (
              <div key={item.name} className="flex-none w-4/5 snap-center">
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                 
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => navigateCarousel('next')}
            disabled={currentIndex === items.length - 1}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/70 rounded-full p-2 ${currentIndex === items.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            
          </button>
        </div>
      )}
    </Fragment>
  );
}

export default Promotions;