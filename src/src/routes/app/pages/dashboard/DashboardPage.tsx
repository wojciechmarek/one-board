import { Models } from 'appwrite';
import { useEffect, useState } from 'react';
import { account } from '../../../../api/app-write';

type Props = {};

export const DashboardPage = (props: Props) => {
  const [session, setSession] = useState<Models.Session>();
  useEffect(() => {
    const getAccountSession = async () => {
      const currentSession = await account.getSession('current');
      setSession(currentSession);
    };

    getAccountSession();
  }, []);

  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
};
