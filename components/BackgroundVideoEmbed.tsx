"use client";

export default function BackgroundVideoEmbed({
  embed,
  title,
}: {
  embed?: string;
  title?: string;
}) {
  if (!embed) return null;

  const src = `${embed}??h=1488b32ce1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&mute=1&lopp=1&background=1`;

  return (
    <div className="overflow-hidden h-screen w-screen absolute top-0 inset-x-0">
      <iframe
        src={src}
        width="200%"
        height="200%"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title={title}
        className="absolute -z-10 h-dvh left-1/2 -translate-x-1/2 "
      ></iframe>
    </div>
  );
}
