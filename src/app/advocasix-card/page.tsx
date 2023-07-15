import AdvocasixCard from '@/components/ui/Advocasix/AdvocasixCard';

export default function page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <AdvocasixCard
        title="Climate Action"
        imageUrl="/assets/images/placeholder.jpg"
        size="fat"
      />
      <AdvocasixCard
        title="Gay Pride"
        imageUrl="/assets/images/placeholder.jpg"
        size="fat"
      />
      <AdvocasixCard
        title="Ecolocation"
        imageUrl="/assets/images/placeholder.jpg"
        size="thin"
      />
      <AdvocasixCard
        title="Ecolocation"
        imageUrl="/assets/images/placeholder.jpg"
        size="thin"
      />
    </div>
  );
}
