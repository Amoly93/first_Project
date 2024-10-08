import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



const Users = () => {
    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
      };
  const { data, isLoading, error } = useQuery({
    queryKey: ['dataKey'],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div>
      {data.map((user) => (
        <p key={user.id} className='p-2'>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
