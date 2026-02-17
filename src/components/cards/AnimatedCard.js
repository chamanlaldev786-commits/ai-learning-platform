// src/components/cards/AnimatedCard.js
import Image from "next/image";
import Link from "next/link";

export default function AnimatedCard({ title, description, image, link }) {
  return (
    <Link
      href={link}
      className="bg-white rounded-xl shadow p-4 hover:shadow-lg hover:scale-105 transition transform cursor-pointer block"
    >
      {image && (
        <div className="relative w-full h-40 mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}
      <h3 className="text-xl font-bold text-purple-700">{title}</h3>
      <p className="text-purple-600 mt-2">{description}</p>
    </Link>
  );
}
