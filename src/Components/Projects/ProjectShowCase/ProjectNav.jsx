import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';

const tocLinks = [
  { href: '#features', label: '✨ Feature Highlights' },
  { href: '#techstack', label: '🧪 Technologies Used' },
  { href: '#use-cases', label: '🧩 Use Cases' },
  { href: '#challenges-learnings', label: '🧠 Challenges & Learnings' },
  { href: '#livedemo', label: '👀 Live Demo & Code' },
];

export default function ProjectNav() {
  const [activeId, setActiveId] = useState(null);
  const [progressTop, setProgressTop] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);

  // === Scroll Spy ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveId(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-40% 0% -40% 0%',
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // === Scroll Progress Line ===
  useEffect(() => {
    const handleScroll = () => {
      const sidebar = document.getElementById('sidebar-scroll');
      if (!sidebar) return;

      const scrollTop = sidebar.scrollTop;
      const scrollHeight = sidebar.scrollHeight - sidebar.clientHeight;

      const progress = scrollTop / scrollHeight;
      setProgressTop(progress * sidebar.clientHeight);
      setProgressHeight(50); // Adjust as needed
    };

    const sidebar = document.getElementById('sidebar-scroll');
    if (sidebar) {
      sidebar.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex h-full w-[var(--fd-toc-width)] max-w-full flex-col pe-4 sticky top-20">
      <div className="h-10" />

      <h3 className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide size-4"
        >
          <path d="M15 18H3" />
          <path d="M17 6H3" />
          <path d="M21 12H3" />
        </svg>
        On this page
      </h3>

      <div
        id="sidebar-scroll"
        className="relative min-h-0 text-sm ms-px overflow-auto py-3 [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)]"
      >
        <div
          className="absolute start-0 top-0 rtl:-scale-x-100"
          style={{
            width: '2px',
            height: '100%',
            maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 160'%3E%3Cpath d='M1 12 L1 32 L1 44 L1 64 L1 76 L1 96 L1 108 L1 128 L1 140 L1 160' stroke='black' stroke-width='1' fill='none' /%3E%3C/svg%3E")`,
          }}
        >
          <div
            role="none"
            className="absolute w-full bg-fd-primary transition-all"
            style={{
              top: `${progressTop}px`,
              height: `${progressHeight}px`,
            }}
          />
        </div>

        <div className="flex flex-col">
          {tocLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              data-active={activeId === link.href.replace('#', '')}
              className={clsx(
                'prose relative py-1.5 text-sm text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground',
                'first:pt-0 last:pb-0 [overflow-wrap:anywhere]',
                {
                  'text-fd-primary font-medium': activeId === link.href.replace('#', ''),
                }
              )}
              style={{ paddingInlineStart: '14px' }}
            >
              <div
                className="absolute inset-y-0 w-px bg-fd-foreground/10"
                style={{ insetInlineStart: '0px' }}
              />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
