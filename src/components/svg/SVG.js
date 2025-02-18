import React from 'react';

export default function SVG({ type }) {
  if ((type = 'bulletSeparator')) {
    return (
      <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <circle cx="3" cy="3" r="3" />
      </svg>
    );
  }
}
