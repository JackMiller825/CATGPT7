"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { filterGallery, galleryFilters, kindLabel, type GalleryFilter, type GalleryItem } from "@/lib/gallery";

function TileBody({ item }: { item: GalleryItem }) {
  if (item.src) {
    return (
      <span className="tile-media">
        <Image src={item.src} alt={item.alt || item.title} fill sizes="(max-width: 700px) 100vw, 280px" />
      </span>
    );
  }
  if (item.kind === "ascii") return <pre>{item.text}</pre>;
  return <div className="lore">{(item.text || "").slice(0, 320)}…</div>;
}

export function Gallery() {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [index, setIndex] = useState<number | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const view = filterGallery(filter);
  const active = index === null ? null : view[index];

  function open(next: number, button?: HTMLButtonElement | null) {
    if (!view.length) return;
    if (button) opener.current = button;
    setIndex((next + view.length) % view.length);
  }

  function close() {
    setIndex(null);
    const returnTo = opener.current;
    opener.current = null;
    window.setTimeout(() => returnTo?.focus(), 0);
  }

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") setIndex((current) => (current === null ? current : (current + 1) % view.length));
      if (event.key === "ArrowLeft")
        setIndex((current) => (current === null ? current : (current + view.length - 1) % view.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, view.length]);

  return (
    <section className="pn" id="made">
      <header className="pn-h">
        <h2>Made by CATGPT Mind</h2>
        <span>
          {view.length} {view.length === 1 ? "piece" : "pieces"}
        </span>
      </header>
      <div className="pn-b">
        <div className="filters" role="toolbar" aria-label="Gallery filters">
          {galleryFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              className={filter === item.id ? "chip active" : "chip"}
              aria-pressed={filter === item.id}
              onClick={() => {
                setFilter(item.id);
                setIndex(null);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="grid">
          {view.map((item, itemIndex) => (
            <button
              key={item.id}
              className="tile"
              type="button"
              onClick={(event) => open(itemIndex, event.currentTarget)}
            >
              <TileBody item={item} />
              <span className="tile-cap">
                <b>{item.title}</b>
                <span>
                  {kindLabel[item.kind]} · {item.date}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
      {active ? (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button ref={closeRef} className="lb-x" type="button" aria-label="Close" onClick={close}>
            ✕
          </button>
          <button className="lb-nav lb-prev" type="button" aria-label="Previous" onClick={() => open((index ?? 0) - 1)}>
            ‹
          </button>
          <button className="lb-nav lb-next" type="button" aria-label="Next" onClick={() => open((index ?? 0) + 1)}>
            ›
          </button>
          <figure className="lb-fig">
            {active.src ? (
              <Image src={active.src} alt={active.alt || active.title} width={1200} height={1200} sizes="90vw" />
            ) : active.kind === "ascii" ? (
              <pre>{active.text}</pre>
            ) : (
              <div className="lore-full">{active.text}</div>
            )}
            <figcaption>
              <b>{active.title}</b>
              {active.caption}
              <em>
                {kindLabel[active.kind]} · {active.date} · site artwork, not an autonomous model log
              </em>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
