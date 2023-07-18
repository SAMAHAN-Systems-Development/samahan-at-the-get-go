import placeholder from 'public/assets/images/placeholder.jpg';

import ModalCardButton from '@/components/ui/ModalCardButton';

export default function page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <ModalCardButton
        title="Climate Action"
        imageUrl={placeholder}
        size="fat"
      />
      <ModalCardButton title="Gay Pride" imageUrl={placeholder} size="fat" />
      <ModalCardButton title="Ecolocation" imageUrl={placeholder} size="thin" />
      <ModalCardButton title="Ecolocation" imageUrl={placeholder} size="thin" />
    </div>
  );
}
