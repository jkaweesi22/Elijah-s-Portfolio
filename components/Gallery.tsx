import { getImageSrc } from "@/lib/getImageSrc";

interface GalleryProps {
  images: string[];
  alt?: string;
}

export function Gallery({ images, alt = "Project image" }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative aspect-[4/3] overflow-hidden rounded-xl bg-card border border-border"
        >
          <img
            src={getImageSrc(src)}
            alt={`${alt} ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
