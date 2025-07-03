import Image from 'next/image';
import { CardProps } from '@/interfaces';

export default function Card({ title, location, imageUrl, price, rating }: CardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md max-w-sm">
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 flex items-center gap-2">
          <Image src="/assets/Date.svg" alt="Date Icon" width={16} height={16} />
          {location}
        </p>
        <p className="font-bold">${price} / night</p>
        <p className="text-yellow-500">⭐ {rating}</p>
      </div>
    </div>
  );
}
