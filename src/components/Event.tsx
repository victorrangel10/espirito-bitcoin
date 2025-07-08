
import { useState, useEffect, useRef } from "react";
import EventHeader from "./EventHeader";
import EventDetails from "./EventDetails";
import EventSchedule from "./EventSchedule";
import EventInfo from "./EventInfo";

const Event = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="evento"
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
      ref={sectionRef}
    >
      <div className="section-container">
        <EventHeader isVisible={isVisible} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <EventDetails isVisible={isVisible} />
            <EventSchedule />
          </div>
          
          <EventInfo isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Event;
