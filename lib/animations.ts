// Animation utilities and constants for XELTA website

export const animationClasses = {
  // Fade in animations
  fadeIn: 'animate-fadeIn',
  fadeInUp: 'animate-fadeInUp',
  scaleIn: 'animate-scaleIn',

  // Hover effects
  hoverScale: 'hover:scale-105 transition-transform duration-300',
  hoverShadow: 'hover:shadow-lg transition-shadow duration-300',
  hoverLift: 'hover:-translate-y-1 transition-transform duration-300',
};

export const animationTiming = {
  fast: 200,
  normal: 300,
  slow: 500,
};

// Scroll animation trigger helper
export const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

// Stagger animation delay helper
export const getStaggerDelay = (index: number, baseDelay: number = 100) => {
  return `${index * baseDelay}ms`;
};
