import type { IconName } from "../types";

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  switch (name) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M3 11.5 12 4l9 7.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.8 10.8V20h10.4v-9.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 20v-5h4v5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "orders":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M7 7h10l-1.3 7.2a2 2 0 0 1-2 1.6H9.3a2 2 0 0 1-2-1.6L6 5H4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="19" r="1.6" fill="currentColor" />
          <circle cx="15" cy="19" r="1.6" fill="currentColor" />
        </svg>
      );
    case "products":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 9h8M8 13h8M8 17h5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "analytics":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M5 19V9M12 19V5M19 19v-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "marketing":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="m4 11 8-4v10l-8-4Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 9h3.8a3.2 3.2 0 0 1 0 6.4H12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 14.8v2.4a1.4 1.4 0 1 0 2.8 0V16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "messages":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M4.5 6.5h15a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 3v-3H4.5A2.5 2.5 0 0 1 2 15V9a2.5 2.5 0 0 1 2.5-2.5Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="9" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="15" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case "jira":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 3 6.5 8.5 12 14l5.5-5.5L12 3Z" fill="currentColor" />
          <path d="M12 10 6.5 15.5 12 21l5.5-5.5L12 10Z" fill="currentColor" opacity="0.65" />
        </svg>
      );
    case "slack":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="10.4" y="2.5" width="3.2" height="8" rx="1.6" fill="#2EB67D" />
          <rect x="13.5" y="10.4" width="8" height="3.2" rx="1.6" fill="#E01E5A" />
          <rect x="10.4" y="13.5" width="3.2" height="8" rx="1.6" fill="#ECB22E" />
          <rect x="2.5" y="10.4" width="8" height="3.2" rx="1.6" fill="#36C5F0" />
        </svg>
      );
    case "intercom":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 11.5v3m3-5v6m3-7v7m3-5v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "logout":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M9 5H6.7A2.7 2.7 0 0 0 4 7.7v8.6A2.7 2.7 0 0 0 6.7 19H9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 16l4-4-4-4M19 12H9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="m16 16 4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "bell":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 5a5 5 0 0 0-5 5v2.7c0 .7-.2 1.3-.6 1.9L5 16h14l-1.4-1.4a3.2 3.2 0 0 1-.6-1.9V10a5 5 0 0 0-5-5Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M10 19a2 2 0 0 0 4 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="4" y="5" width="16" height="15" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 3v4M16 3v4M4 10h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "download":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 5v9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="m8.5 10.5 3.5 3.5 3.5-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="5" y="17" width="14" height="3" rx="1.5" fill="currentColor" />
        </svg>
      );
    case "cart":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M7 7h10l-1.3 6.8a2 2 0 0 1-2 1.6H9.4a2 2 0 0 1-2-1.5L6 5H4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="19" r="1.7" fill="currentColor" />
          <circle cx="15" cy="19" r="1.7" fill="currentColor" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="9" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="15.5" cy="9" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M4 18.5a5 5 0 0 1 10 0M12 18.5a4.2 4.2 0 0 1 8 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "bag":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="6" y="8" width="12" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M9 8V7a3 3 0 0 1 6 0v1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "arrow-up":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="m6 14 6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "arrow-down":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="m6 10 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="m7 9 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chevron-left":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="m14.5 7-5 5 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="m9.5 7 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 2.5 14.5 9l6.5 2.5-6.5 2.5L12 20.5 9.5 14 3 11.5 9.5 9 12 2.5Z" fill="currentColor" />
        </svg>
      );
    case "money":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="m5 12 3 3 4-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "expense":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="m7 17 10-10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M13 7h4v4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}
