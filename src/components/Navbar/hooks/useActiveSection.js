import { useEffect, useState } from "react";

const useActiveSection = (sections) => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        return scrollY >= offsetTop - 100 && scrollY < offsetTop + height - 100;
      });
      setActiveSection(current || sections[0]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return activeSection;
};

export default useActiveSection;
