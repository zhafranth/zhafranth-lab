"use client";

import React from "react";

interface DotPulseProps {
  size?: number;
  color?: string;
  className?: string;
}

const DotPulse: React.FC<DotPulseProps> = ({ 
  size = 4, 
  color = "#000",
  className = ""
}) => {
  return (
    <div 
      className={`relative inline-block ${className}`}
      style={{ '--dot-size': `${size}px`, '--dot-color': color } as React.CSSProperties}
    >
      <style jsx>{`
        .dot {
          width: var(--dot-size);
          height: var(--dot-size);
          background-color: var(--dot-color);
          border-radius: 50%;
          position: relative;
        }

        .pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: var(--dot-size);
          height: var(--dot-size);
          background-color: var(--dot-color);
          border-radius: 50%;
          animation: pulse 1.5s cubic-bezier(0.24, 0, 0.38, 1) infinite;
        }

        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }
      `}</style>
      <div className="dot" />
      <div className="pulse" />
    </div>
  );
};

export default DotPulse;
