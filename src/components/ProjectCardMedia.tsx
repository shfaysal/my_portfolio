"use client";

import { useEffect, useMemo, useState } from "react";

type ProjectCardMediaProps = {
  images: string[];
  fallbackImage?: string;
  title: string;
  intervalMs?: number;
};

export default function ProjectCardMedia({
  images,
  fallbackImage,
  title,
  intervalMs = 5000,
}: ProjectCardMediaProps) {
  const gallery = useMemo(() => {
    const cleaned = images.map((img) => img.trim()).filter(Boolean);
    if (cleaned.length > 0) return cleaned;
    if (fallbackImage) return [fallbackImage];
    return [];
  }, [images, fallbackImage]);

  const [index, setIndex] = useState(0);
  const goTo = (nextIndex: number) => {
    if (nextIndex === index || gallery.length === 0) return;
    setIndex(nextIndex);
  };

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
    <div className="card-media">
      <div className="card-image-wrap">
        <img
          key={gallery[index]}
          className="card-image card-image-swap"
          src={gallery[index]}
          alt={`${title} app preview ${index + 1}`}
          loading="lazy"
        />
      </div>
      <div className="card-pager" role="tablist" aria-label="Project images">
        {gallery.map((_, i) => (
          <button
            key={`${gallery[i]}-${i}`}
            className={i === index ? "card-pager-bar active" : "card-pager-bar"}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show image ${i + 1} of ${gallery.length}`}
            aria-selected={i === index}
            role="tab"
          >
            {i === index ? (
              <span
                className="card-pager-fill"
                style={{ animationDuration: `${intervalMs}ms` }}
              />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}
