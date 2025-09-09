import React from 'react';
import { clsx } from 'clsx';

const tocLinks = [
  { href: '#-feature-highlights', label: '✨ Feature Highlights', active: false },
  { href: '#-technologies-used', label: '🧪 Technologies Used', active: false },
  { href: '#-use-cases', label: '🧩 Use Cases', active: true },
  { href: '#-challenges--learnings', label: '🧠 Challenges & Learnings', active: true },
  { href: '#-live-demo--code', label: '👀 Live Demo & Code', active: false },
];

export default function ProjectNav() {
  return (
    <div className="flex h-full w-[var(--fd-toc-width)] max-w-full flex-col pe-4">
      <div className="h-10" />
      
      {/* Header */}
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

      {/* Scrollable Content */}
      <div className="relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3">
        
        {/* Vertical Progress Indicator */}
        <div
          className="absolute start-0 top-0 rtl:-scale-x-100"
          style={{
            width: '2px',
            height: '160px',
            maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 160'%3E%3Cpath d='M1 12 L1 32 L1 44 L1 64 L1 76 L1 96 L1 108 L1 128 L1 140 L1 160' stroke='black' stroke-width='1' fill='none' /%3E%3C/svg%3E")`,
          }}
        >
          <div
            role="none"
            className="mt-[--fd-top] h-[--fd-height] bg-fd-primary transition-all"
            style={{
              '--fd-top': '76px',
              '--fd-height': '52px',
            }}
          />
        </div>

        {/* TOC Links */}
        <div className="flex flex-col">
          {tocLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              data-active={link.active}
              className={clsx(
                'prose relative py-1.5 text-sm text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground',
                'first:pt-0 last:pb-0 [overflow-wrap:anywhere]',
                {
                  'text-fd-primary': link.active,
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
