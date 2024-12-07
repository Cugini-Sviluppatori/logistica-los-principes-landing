import { useEffect, useState } from "react";

const useActiveSection = (sections) => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting);
      if (visibleSection) {
        setActiveSection(visibleSection.target.id);
      }
    }, observerOptions);

    // Observar todas las secciones
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      // Limpiar observadores
      observer.disconnect();
    };
  }, [sections]);

  return activeSection;
};

export default useActiveSection;
