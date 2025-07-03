export interface CardProps {
  title: string;
  location: string;
  imageUrl: string;
  price: number;
  rating: number;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}
