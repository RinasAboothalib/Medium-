import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark-only' | 'wordmark-only' | 'compact';
  className?: string;
  light?: boolean;
}

/**
 * 3rd Image: Official Logo Mark of MEDIUM
 * Royal Blue background (#12229D) with white high-contrast serif 'M' and 4-point sparkle star (✦)
 */
export const MediumMark: React.FC<{ size?: number; className?: string }> = ({
  size = 40,
  className = '',
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex-shrink-0 flex items-center justify-center rounded-xl bg-[#12229D] shadow-md shadow-blue-950/60 overflow-hidden group-hover:scale-105 transition-transform duration-300 ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[84%] h-[84%]"
        aria-hidden="true"
      >
        {/* High-contrast serif 'M' matching 3rd image */}
        <path
          d="M21 78V24H28.5L46.5 61.5L64.5 24H72V78H64V36.5L48.2 68.5H44.8L29 36.5V78H21Z"
          fill="white"
        />
        {/* Top serif brackets on left and right stems */}
        <path d="M17 24H32V28H17V24Z" fill="white" />
        <path d="M61 24H76V28H61V24Z" fill="white" />
        {/* Bottom serif brackets */}
        <path d="M60 74H76V78H60V74Z" fill="white" />

        {/* Signature 4-point sparkle star (✦) at lower left as shown in 3rd image */}
        <path
          d="M20 73 C20 70, 16 68, 16 68 C16 68, 20 66, 20 63 C20 66, 24 68, 24 68 C24 68, 20 70, 20 73 Z"
          fill="white"
        />
        <circle cx="20" cy="68" r="0.8" fill="white" />
      </svg>
    </div>
  );
};

/**
 * 4th Image: Website Name Wordmark "MEDIUM EVENTS"
 * Clean vector representation of the luxury serif logo with image background removed (transparent).
 */
export const MediumWordmark: React.FC<{ light?: boolean; className?: string }> = ({
  light = true,
  className = '',
}) => {
  const textColor = light ? '#FFFFFF' : '#0B132B';

  return (
    <div className={`flex flex-col justify-center leading-none ${className}`}>
      {/* "MEDIUM" Display Serif Wordmark matching 4th image */}
      <div className="flex items-baseline">
        <svg
          viewBox="0 0 240 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 sm:h-8 w-auto"
          aria-label="MEDIUM"
        >
          {/* M with sparkle at bottom left */}
          <g>
            <path
              d="M10 44V10H16.5L30.5 39.5L44.5 10H51V44H44.5V20.5L32 44.5H29L16.5 20.5V44H10Z"
              fill={textColor}
            />
            {/* Top serifs for M */}
            <path d="M6 10H19V13H6V10Z" fill={textColor} />
            <path d="M42 10H55V13H42V10Z" fill={textColor} />
            {/* Bottom serif */}
            <path d="M41 41H54V44H41V41Z" fill={textColor} />
            {/* Sparkle ✦ at lower-left of M */}
            <path
              d="M10 41C10 38.5 7 37 7 37C7 37 10 35.5 10 33C10 35.5 13 37 13 37C13 37 10 38.5 10 41Z"
              fill={textColor}
            />
          </g>

          {/* E */}
          <g>
            <path
              d="M62 44V10H88V16.5H69.5V24.5H84V30H69.5V37.5H89V44H62Z"
              fill={textColor}
            />
            <path d="M58 10H66V13H58V10Z" fill={textColor} />
            <path d="M58 41H66V44H58V41Z" fill={textColor} />
          </g>

          {/* D */}
          <g>
            <path
              d="M98 44V10H112C122.5 10 129 17 129 27C129 37 122.5 44 112 44H98ZM105.5 37.5H111.5C118 37.5 121.5 33 121.5 27C121.5 21 118 16.5H111.5V37.5H105.5Z"
              fill={textColor}
            />
            <path d="M94 10H103V13H94V10Z" fill={textColor} />
            <path d="M94 41H103V44H94V41Z" fill={textColor} />
          </g>

          {/* I */}
          <g>
            <path d="M141 44V10H148V44H141Z" fill={textColor} />
            <path d="M136 10H153V13H136V10Z" fill={textColor} />
            <path d="M136 41H153V44H136V41Z" fill={textColor} />
          </g>

          {/* U */}
          <g>
            <path
              d="M162 10H169.5V31C169.5 36.5 173 40 178.5 40C184 40 187.5 36.5 187.5 31V10H195V30.5C195 40 188 45 178.5 45C169 45 162 40 162 30.5V10Z"
              fill={textColor}
            />
            <path d="M158 10H173V13H158V10Z" fill={textColor} />
            <path d="M184 10H199V13H184V10Z" fill={textColor} />
          </g>

          {/* M */}
          <g>
            <path
              d="M206 44V10H212.5L226.5 39.5L240.5 10H247V44H240.5V20.5L228 44.5H225L212.5 20.5V44H206Z"
              fill={textColor}
            />
            <path d="M202 10H215V13H202V10Z" fill={textColor} />
            <path d="M238 10H251V13H238V10Z" fill={textColor} />
            <path d="M237 41H250V44H237V41Z" fill={textColor} />
            {/* Sparkle ✦ at right base */}
            <path
              d="M226 48C226 46 224 44.5 224 44.5C224 44.5 226 43 226 41C226 43 228 44.5 228 44.5C228 44.5 226 46 226 48Z"
              fill={textColor}
            />
          </g>
        </svg>
      </div>

      {/* "E V E N T S" Sub-Text precisely tracked as in 4th image */}
      <div className="flex justify-between items-center px-1 mt-0.5 tracking-[0.45em] text-[8.5px] sm:text-[9.5px] font-medium text-slate-300 uppercase">
        <span>E</span>
        <span>V</span>
        <span>E</span>
        <span>N</span>
        <span>T</span>
        <span>S</span>
      </div>
    </div>
  );
};

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', light = true }) => {
  if (variant === 'mark-only') {
    return <MediumMark className={className} />;
  }

  if (variant === 'wordmark-only') {
    return <MediumWordmark light={light} className={className} />;
  }

  return (
    <div className={`flex items-center gap-3.5 select-none group ${className}`}>
      {/* 3rd Image: Official Logo Mark (Royal Blue Badge with White Serif M + ✦) */}
      <MediumMark size={40} />

      {/* 4th Image: Website Name with transparent background */}
      {variant !== 'compact' && <MediumWordmark light={light} />}
    </div>
  );
};
