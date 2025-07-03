import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

export default function Home() {
  return (
    <div className="p-8 space-y-6 max-w-md mx-auto">
      <Card
        title="Beautiful Beach House"
        location="Malibu, California"
        imageUrl="/assets/hero.png"
        price={250}
        rating={4.8}
      />
      <Button label="Book Now" onClick={() => alert('Booked!')} />
    </div>
  );
}
