'use client';

import React from 'react';
import { CustomChat, FacebookProvider } from 'react-facebook';

const ChatPlugin = () => {
  return (
    <FacebookProvider appId="892539722880146" chatSupport>
      {/* Add the correct pageID from SAMAHAN Facebook Page */}
      <CustomChat
        pageId="234793876597583"
        minimized={true}
        greetingDialogDisplay="hide"
      />
    </FacebookProvider>
  );
};

export default ChatPlugin;
