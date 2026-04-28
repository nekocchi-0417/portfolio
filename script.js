const revealTargets = document.querySelectorAll(
  '.work-experiences, .projects-section, .project-card, .skill-card, .skills-orchestrator, .skills-sidetrack, .about-intro, .about-hobbies, .about-section, .cs-header, .cs-section, .cs-impact, .cs-learnings, .more-project-card'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  revealTargets.forEach((target, index) => {
    target.classList.add('reveal-ready');
    target.style.setProperty('--reveal-delay', `${Math.min(index * 35, 280)}ms`);
    observer.observe(target);
  });
}
