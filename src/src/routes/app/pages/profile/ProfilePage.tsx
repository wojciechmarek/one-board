import { Models } from 'appwrite';
import { useEffect, useRef, useState } from 'react';
import { account } from '../../../../api/app-write';
// Using ES6 import syntax
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

// Then register the languages you need
hljs.registerLanguage('javascript', javascript);

type Props = {};

export const ProfilePage = (props: Props) => {
  const [profile, setProfile] = useState<Models.User<Models.Preferences>>();

  useEffect(() => {
    const getProfile = async () => {
      const profileDetails = await account.get();
      setProfile(profileDetails);
    };

    getProfile();
  }, []);

  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  });

  return (
    <pre>
      <code ref={codeRef}>{JSON.stringify(profile, null, 2)}</code>
    </pre>
  );
  // return 'asdasd';
};
