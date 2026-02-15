"use client";

import { useEffect, useMemo, useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  fallbackImage?: string;
  title: string;
  intervalMs?: number;
};

export default function ProjectGallery({
  images,
  fallbackImage,
  title,
  intervalMs = 5000,
}: ProjectGalleryProps) {
  const gallery = useMemo(() => {
    const cleaned = images.map((img) => img.trim()).filter(Boolean);
    if (cleaned.length > 0) return cleaned;
    if (fallbackImage) return [fallbackImage];
    return [];
  }, [images, fallbackImage]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (gallery.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % gallery.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [gallery.length, intervalMs]);

  useEffect(() => {
    if (index >= gallery.length) {
      setIndex(0);
    }
  }, [gallery.length, index]);

  if (gallery.length === 0) return null;

  return (
    <div className="detail-gallery">
      <img
        className="detail-image"
        src={gallery[index]}
        alt={`${title} app preview ${index + 1}`}
      />
      {gallery.length > 1 ? (
        <div className="detail-pager" role="tablist" aria-label="Project gallery">
          {gallery.map((_, i) => (
            <button
              key={`${gallery[i]}-${i}`}
              className={i === index ? "pager-dot active" : "pager-dot"}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1} of ${gallery.length}`}
              aria-selected={i === index}
              role="tab"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
