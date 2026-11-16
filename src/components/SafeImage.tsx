import { useState } from 'react';
import { GraduationCap } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  priority = false,
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#DDF1E4] via-[#FAF8F2] to-[#DDF1E4] text-[#1E2A24] p-6 text-center ${className}`}
      >
        <GraduationCap className="w-8 h-8 text-[#1F5F3F] mb-2" aria-hidden="true" />
        <span className="text-xs font-medium text-[#1E2A24]">{fallbackTitle || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
