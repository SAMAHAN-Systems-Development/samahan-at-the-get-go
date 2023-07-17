import React from 'react';

import ModalOverlay from '@/components/ui/ModalOverlayComponent/ModalOverlayComponent';

const page = () => {
  return (
    <div className="px-4 ">
      <ModalOverlay
        imageUrl=""
        hashTag="#testTagline"
        title="Climate Action"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        link="/"
      />
    </div>
  );
};

export default page;
