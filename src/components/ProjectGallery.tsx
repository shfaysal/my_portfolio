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
      {gallery.length > 1 ? (
        <div
          className="detail-pager"
          role="tablist"
          aria-label="Project gallery"
        >
          {gallery.map((image, i) => (
            <button
              key={`${image}-${i}`}
              className={i === index ? "pager-item active" : "pager-item"}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1} of ${gallery.length}`}
              aria-selected={i === index}
              role="tab"
            >
              <img src={image} alt={`${title} thumbnail ${i + 1}`} />
            </button>
          ))}
        </div>
      ) : (
        <div className="detail-pager single" aria-label="Project gallery">
          <div className="pager-item active" aria-hidden="true">
            <img src={gallery[0]} alt={`${title} thumbnail 1`} />
          </div>
        </div>
      )}
    </div>
  );
}
