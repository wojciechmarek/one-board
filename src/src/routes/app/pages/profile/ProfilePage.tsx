import { Models } from 'appwrite';
import { useEffect, useState } from 'react';
import { account } from '../../../../api/app-write';

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
  return <pre>{JSON.stringify(profile, null, 2)}</pre>;
};
