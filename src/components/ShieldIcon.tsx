import React from "react";

export type ShieldIconName =
  | "car"
  | "trespass"
  | "id-card"
  | "wrench"
  | "check"
  | "dispute"
  | "ticket"
  | "campus"
  | "alert"
  | "escort"
  | "school"
  | "backpack"
  | "graduation"
  | "book"
  | "office"
  | "housing"
  | "stadium"
  | "institute";

interface ShieldIconProps {
  name: ShieldIconName;
  size?: number;
  className?: string;
}

const innerIcons: Record<ShieldIconName, React.ReactNode> = {
  // Front-view car (matches "Vehicle Break-ins" in reference)
  car: (
    <g fill="#ffffff">
      <path d="M13.5 19.5 L15 15.8 C15.3 15.1 15.9 14.7 16.7 14.7 H23.3 C24.1 14.7 24.7 15.1 25 15.8 L26.5 19.5 C27.2 19.8 27.6 20.5 27.6 21.3 V25.2 C27.6 25.7 27.2 26.1 26.7 26.1 H25.7 C25.2 26.1 24.8 25.7 24.8 25.2 V24.3 H15.2 V25.2 C15.2 25.7 14.8 26.1 14.3 26.1 H13.3 C12.8 26.1 12.4 25.7 12.4 25.2 V21.3 C12.4 20.5 12.8 19.8 13.5 19.5 Z M16 16.3 L15 19 H25 L24 16.3 H16 Z M14.8 22.5 C15.4 22.5 15.9 22 15.9 21.4 C15.9 20.8 15.4 20.3 14.8 20.3 C14.2 20.3 13.7 20.8 13.7 21.4 C13.7 22 14.2 22.5 14.8 22.5 Z M25.2 22.5 C25.8 22.5 26.3 22 26.3 21.4 C26.3 20.8 25.8 20.3 25.2 20.3 C24.6 20.3 24.1 20.8 24.1 21.4 C24.1 22 24.6 22.5 25.2 22.5 Z" />
    </g>
  ),

  // Walking figure (matches "After-Hours Trespassing" in reference)
  trespass: (
    <g fill="#ffffff">
      <circle cx="21" cy="14.5" r="1.8" />
      <path
        d="M19.8 17.3 L17.3 19.8 M19.8 17.3 L22.8 19.5 L24.5 18.8 M19.8 17.3 L19.2 22.2 L16.8 27 M19.2 22.2 L22.5 24.5 L23 27.5"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  ),

  // ID Card / Badge (matches "Access Control" in reference)
  "id-card": (
    <g>
      <rect x="12.5" y="15.5" width="15" height="10.5" rx="1.8" fill="#ffffff" />
      <circle cx="16.3" cy="19.5" r="1.4" fill="#1d2c48" />
      <path d="M14.1 23.4 C14.1 22 15.1 21.3 16.3 21.3 C17.5 21.3 18.5 22 18.5 23.4 Z" fill="#1d2c48" />
      <rect x="20.2" y="18.3" width="5.2" height="1.4" rx="0.7" fill="#1d2c48" />
      <rect x="20.2" y="21" width="4" height="1.4" rx="0.7" fill="#1d2c48" />
    </g>
  ),

  // Wrench (matches "Property Damage" in reference)
  wrench: (
    <path
      d="M24.6 15.2 C23.3 14.5 21.7 14.8 20.7 15.8 C19.8 16.7 19.5 18.1 20 19.3 L14.3 25 C13.7 25.6 13.7 26.5 14.3 27.1 C14.9 27.7 15.8 27.7 16.4 27.1 L22.1 21.4 C23.3 21.9 24.7 21.6 25.6 20.7 C26.6 19.7 26.9 18.1 26.2 16.8 L24.2 18.8 L22.6 17.2 L24.6 15.2 Z"
      fill="#ffffff"
    />
  ),

  // Checkmark inside shield (for client benefits)
  check: (
    <path
      d="M14.5 21.2 L18.3 25 L25.8 17.2"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),

  // Two people / de-escalation (Student Disputes)
  dispute: (
    <g fill="#ffffff">
      <circle cx="16.5" cy="17" r="1.9" />
      <path d="M13 24.5 C13 21.8 14.5 20.2 16.5 20.2 C18.5 20.2 20 21.8 20 24.5 Z" />
      <circle cx="23.5" cy="17" r="1.9" />
      <path d="M20 24.5 C20 21.8 21.5 20.2 23.5 20.2 C25.5 20.2 27 21.8 27 24.5 Z" />
    </g>
  ),

  // Ticket / Pass (Event Security)
  ticket: (
    <path
      d="M13 17.5 C13 16.7 13.7 16 14.5 16 H25.5 C26.3 16 27 16.7 27 17.5 V19.3 C26.1 19.3 25.4 20 25.4 20.9 C25.4 21.8 26.1 22.5 27 22.5 V24.3 C27 25.1 26.3 25.8 25.5 25.8 H14.5 C13.7 25.8 13 25.1 13 24.3 V22.5 C13.9 22.5 14.6 21.8 14.6 20.9 C14.6 20 13.9 19.3 13 19.3 V17.5 Z M18.5 19 V22.8 M21.5 19 V22.8"
      fill="#ffffff"
    />
  ),

  // Campus Patrol (compass / location pin)
  campus: (
    <g fill="#ffffff">
      <path d="M20 13.8 C16.9 13.8 14.4 16.3 14.4 19.4 C14.4 23.4 20 28.5 20 28.5 C20 28.5 25.6 23.4 25.6 19.4 C25.6 16.3 23.1 13.8 20 13.8 Z M20 21.4 C18.8 21.4 17.9 20.5 17.9 19.3 C17.9 18.1 18.8 17.2 20 17.2 C21.2 17.2 22.1 18.1 22.1 19.3 C22.1 20.5 21.2 21.4 20 21.4 Z" />
    </g>
  ),

  // Emergency Alert / Siren
  alert: (
    <g fill="#ffffff">
      <path d="M20 14 L27.2 26.5 H12.8 L20 14 Z" />
      <rect x="19.2" y="18.3" width="1.6" height="4.2" rx="0.8" fill="#1d2c48" />
      <circle cx="20" cy="24.2" r="1" fill="#1d2c48" />
    </g>
  ),

  // Staff Escort (walking pair / shield-person)
  escort: (
    <g fill="#ffffff">
      <circle cx="17.2" cy="16.2" r="1.8" />
      <path d="M13.8 25.2 V21.4 C13.8 19.8 15.2 18.8 17.2 18.8 C19.2 18.8 20.6 19.8 20.6 21.4 V25.2 H13.8 Z" />
      <circle cx="23.5" cy="17.3" r="1.4" />
      <path d="M21.4 25.2 V21.8 C21.4 20.6 22.3 19.8 23.6 19.8 C24.9 19.8 25.8 20.6 25.8 21.8 V25.2 H21.4 Z" />
    </g>
  ),

  // School Building
  school: (
    <g fill="#ffffff">
      <path d="M20 14 L27 18 V19.5 H13 V18 L20 14 Z" />
      <rect x="14.2" y="20.5" width="2.2" height="5.5" />
      <rect x="18.9" y="20.5" width="2.2" height="5.5" />
      <rect x="23.6" y="20.5" width="2.2" height="5.5" />
      <rect x="13" y="26.5" width="14" height="1.5" />
    </g>
  ),

  // Charter Schools / Backpack
  backpack: (
    <g fill="#ffffff">
      <path d="M17.5 16.5 V15.5 C17.5 14.7 18.2 14 19 14 H21 C21.8 14 22.5 14.7 22.5 15.5 V16.5 H24 C25.1 16.5 26 17.4 26 18.5 V26 C26 26.8 25.3 27.5 24.5 27.5 H15.5 C14.7 27.5 14 26.8 14 26 V18.5 C14 17.4 14.9 16.5 16 16.5 H17.5 Z M19 15.5 V16.5 H21 V15.5 H19 Z M16.2 21.5 V25 H23.8 V21.5 H16.2 Z" />
    </g>
  ),

  // Graduation Cap
  graduation: (
    <g fill="#ffffff">
      <path d="M20 15 L28 19 L20 23 L12 19 L20 15 Z" />
      <path d="M15.2 21.6 V25 C15.2 26.2 17.3 27.2 20 27.2 C22.7 27.2 24.8 26.2 24.8 25 V21.6 L20 24 L15.2 21.6 Z" />
      <rect x="26.4" y="19.5" width="1.3" height="5.2" rx="0.6" />
    </g>
  ),

  // Open Book (Training Centers)
  book: (
    <g fill="#ffffff">
      <path d="M13 16.2 C15.2 15.6 17.6 16 19.4 17.2 V26.5 C17.6 25.4 15.2 25 13 25.5 V16.2 Z" />
      <path d="M27 16.2 C24.8 15.6 22.4 16 20.6 17.2 V26.5 C22.4 25.4 24.8 25 27 25.5 V16.2 Z" />
    </g>
  ),

  // Office Building
  office: (
    <g fill="#ffffff">
      <path d="M14.5 14.5 H25.5 V27.5 H21.5 V24 H18.5 V27.5 H14.5 V14.5 Z M16.8 16.8 V18.8 H18.8 V16.8 H16.8 Z M21.2 16.8 V18.8 H23.2 V16.8 H21.2 Z M16.8 20.5 V22.5 H18.8 V20.5 H16.8 Z M21.2 20.5 V22.5 H23.2 V20.5 H21.2 Z" />
    </g>
  ),

  // Campus Housing
  housing: (
    <g fill="#ffffff">
      <path d="M20 14 L27.5 20.2 H25.5 V27 H21.5 V22.5 H18.5 V27 H14.5 V20.2 H12.5 L20 14 Z" />
    </g>
  ),

  // School Events / Star
  stadium: (
    <path
      d="M20 14 L21.9 18.1 L26.4 18.7 L23.1 21.9 L23.9 26.4 L20 24.2 L16.1 26.4 L16.9 21.9 L13.6 18.7 L18.1 18.1 L20 14 Z"
      fill="#ffffff"
    />
  ),

  // Educational Facilities / Classical Institute
  institute: (
    <g fill="#ffffff">
      <path d="M20 13.8 L27 17.5 H13 L20 13.8 Z" />
      <rect x="13.5" y="18.3" width="13" height="1.3" />
      <rect x="14.6" y="20.4" width="2" height="5.2" />
      <rect x="19" y="20.4" width="2" height="5.2" />
      <rect x="23.4" y="20.4" width="2" height="5.2" />
      <rect x="13" y="26.4" width="14" height="1.5" />
    </g>
  ),
};

export function ShieldIcon({ name, size = 38, className }: ShieldIconProps) {
  const height = Math.round((size * 46) / 40);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={height}
      viewBox="0 0 40 46"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ flexShrink: 0 }}
    >
      <path
        d="M20 2.5 L36 7.5 V20.5 C36 31.2 28.8 39.2 20 43.5 C11.2 39.2 4 31.2 4 20.5 V7.5 L20 2.5 Z"
        fill="#1d2c48"
        stroke="#fecf31"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      {innerIcons[name]}
    </svg>
  );
}
