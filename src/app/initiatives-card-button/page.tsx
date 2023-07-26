import img from 'public/assets/images/placeholder.jpg';

import InitiativesCardButton from '@/components/ui/Offices/InitiativesCardButton';

export default function page() {
  return (
    <div className="flex flex-col md:flex-row p-6 gap-6">
      <InitiativesCardButton title="Climate Change" imageUrl={img} />
      <InitiativesCardButton title="Climate Change" imageUrl={img} />
    </div>
  );
}
