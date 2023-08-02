import ModalUI from '@/components/ui/ModalUI';
import { advocasixData } from '@/data/AdvocasixData';

export default function page() {
  return (
    <div className="flex flex-col p-6 gap-6">
      {advocasixData.map((item, index) => (
        <div key={index}>
          <ModalUI {...item} />
        </div>
      ))}
    </div>
  );
}
