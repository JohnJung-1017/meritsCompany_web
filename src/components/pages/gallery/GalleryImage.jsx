import { useState } from "react";

function GalleryImage({
  src,
  alt,
  className,
  fallbackLabel,
  objectClassName = "object-cover",
}) {
  const [hasError, setHasError] = useState(!src);

  if (hasError) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#0f172a,#1e293b_55%,#334155)] text-center ${className}`}
      >
        <div className="px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
            Image Placeholder
          </p>
          <p className="mt-3 text-lg font-semibold text-white/90">
            {fallbackLabel || "시공 이미지 준비 중"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={`h-full w-full ${objectClassName} ${className}`}
    />
  );
}

export default GalleryImage;
