import ModalCardButton from '@/components/ui/ModalCardButton';

export default function page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <ModalCardButton
        title="Climate Action"
        imageUrl="/assets/images/placeholder.jpg"
        size="fat"
      />
      <ModalCardButton
        title="Gay Pride"
        imageUrl="/assets/images/placeholder.jpg"
        size="fat"
      />
      <ModalCardButton
        title="Ecolocation"
        imageUrl="/assets/images/placeholder.jpg"
        size="thin"
      />
      <ModalCardButton
        title="Ecolocation"
        imageUrl="/assets/images/placeholder.jpg"
        size="thin"
      />
    </div>
  );
}
