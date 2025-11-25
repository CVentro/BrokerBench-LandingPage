import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const heroObserverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Create a sentinel element at the top of the page to track hero section
    const topSentinel = document.createElement("div");
    topSentinel.style.position = "absolute";
    topSentinel.style.top = "0";
    topSentinel.style.height = "100vh";
    topSentinel.style.width = "1px";
    topSentinel.style.pointerEvents = "none";
    document.body.prepend(topSentinel);
    heroObserverRef.current = topSentinel;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        // Show button when hero section is scrolled out of view
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px",
      }
    );

    heroObserver.observe(topSentinel);

    // Observe footer to change button behavior
    const footer = document.querySelector("footer");
    if (footer) {
      const footerObserver = new IntersectionObserver(
        ([entry]) => {
          // Change to "Go Up" when footer is visible
          setIsNearFooter(entry.isIntersecting);
        },
        {
          threshold: 0.1,
          rootMargin: "200px 0px 0px 0px", // Start showing earlier
        }
      );

      footerObserver.observe(footer);

      return () => {
        heroObserver.disconnect();
        footerObserver.disconnect();
        if (topSentinel && topSentinel.parentNode) {
          topSentinel.parentNode.removeChild(topSentinel);
        }
      };
    }

    return () => {
      heroObserver.disconnect();
      if (topSentinel && topSentinel.parentNode) {
        topSentinel.parentNode.removeChild(topSentinel);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 animate-slide-up"
          : "opacity-0 translate-y-10 translate-x-[20px] pointer-events-none"
      }`}
    >
      {isNearFooter ? (
        <Button
          variant="hero"
          size="lg"
          onClick={scrollToTop}
          className="text-base px-6 gap-2 shadow-2xl glow-primary hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5 animate-bounce" />
          Go Up
        </Button>
      ) : (
        <Button
          variant="hero"
          size="lg"
          className="text-base px-6 gap-2 shadow-2xl glow-primary hover:scale-110 transition-all duration-300"
          asChild
        >
          <Link to="/docs">
            <Download className="w-5 h-5 animate-pulse" />
            Get Started
          </Link>
        </Button>
      )}
    </div>
  );
};

export default FloatingCTA;

