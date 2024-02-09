'use client';

import React from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';

const ChatPlugin = () => {
  return (
    <FacebookProvider appId="892539722880146" chatSupport>
      {/* Add the correct pageID from SAMAHAN Facebook Page */}
      <CustomChat pageId="123456789" minimized={true} />
    </FacebookProvider>
  );
};

export default ChatPlugin;
