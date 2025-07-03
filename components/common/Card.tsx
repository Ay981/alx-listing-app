// components/common/Card.tsx
import Image from 'next/image';
import { CardProps } from '../../interfaces';

export default function Card({ title, location, imageUrl, price, rating }: CardProps) {
  return (
    <div className="rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
      <div className="relative w-full h-60">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <div className="text-sm text-gray-500">{location}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-gray-800 font-medium">${price} / night</span>
          <div className="flex items-center gap-1">
            <Image src="/assets/icons/star.svg" alt="star" width={16} height={16} />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
