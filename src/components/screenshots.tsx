"use client";
import React, { useState } from "react";
import Image from "next/image";

type ImageGalleryProps = {
  images: string[];
  folderPath?: string;
};

export default function Screenshots({ images, folderPath = "/images/projets" }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative aspect-video cursor-pointer"
            onClick={() => setSelectedImage(`${folderPath}/${img}`)}
          >
            <Image
              src={`${folderPath}/${img}`}
              alt={`Capture d'écran ${idx + 1}`}
              fill
              quality={90}
              className="rounded-xl shadow-lg hover:scale-105 transition duration-200 ease-in-out object-cover"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-8xl  p-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Image agrandie"
              width={1200}
              height={800}
              className="rounded-xl object-contain w-full h-auto max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
