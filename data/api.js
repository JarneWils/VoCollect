import useSWR from 'swr';
import fetcher from './_fetcher';

export default function useData(username, password) {
  const { data, error, isLoading } = useSWR(
    ['https://jarneb.vaw.be/vocollect/api.php', { users_username: username, users_password: password }],
    fetcher
  );

  let userData = null;
  if (data) {
    if (data.success) {
      userData = data.user_data;
      users = data.users;
    } 
  }

  return {
    userData,
    users,
  };
}