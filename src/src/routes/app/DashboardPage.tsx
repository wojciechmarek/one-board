import { Models } from 'appwrite';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { account } from '../../api/app-write';

type Props = {};

export const DashboardPage = (props: Props) => {
  const navigate = useNavigate();

  const [session, setSession] = useState<Models.Session>();

  const handleOnLogOutClick = async () => {
    await account.deleteSession('current');
    navigate('/login');
  };

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
