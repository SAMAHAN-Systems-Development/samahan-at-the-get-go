import type { Meta, StoryObj } from '@storybook/react';
import placeholder from 'public/assets/images/HelpPortalImage.png';

import InitiativesModalUI from '@/components/ui/Offices/InitiativesModalUI';

const meta: Meta<typeof InitiativesModalUI> = {
  title: 'UI/Initiatives Modal UI',
  component: InitiativesModalUI,
};

export default meta;
type Story = StoryObj<typeof InitiativesModalUI>;

export const Primary: Story = {
  args: {
    number: '01',
    title: 'Magis Gala: Ateneo Year Starter',
    imageUrl1: placeholder,
    imageUrl2: placeholder,
    description:
      'In the spirit of building traditions, the SAMAHAN once again introduces the wonders of being in the face-to-face set up together as a community. The Magis Gala shall have the start of Recruitment Week in collaboration with the COA-D and AFYOP available for the whole Ateneo community, integrated Cluster Orientations within the said week, and culminating with sports matches with the Loyola schools.',
  },
  render: (args) => <InitiativesModalUI {...args} />,
};
