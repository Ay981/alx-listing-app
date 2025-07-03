// components/common/Button.tsx
import { ButtonProps } from '../../interfaces';
import clsx from 'clsx';

export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-4 py-2 rounded-xl font-medium transition',
        variant === 'primary'
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-200 text-black hover:bg-gray-300'
      )}
    >
      {label}
    </button>
  );
}
