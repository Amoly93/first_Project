import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Users = () => {
  const fetchData = async () => {
    const response = await axios.get("https://jsonplaceholder.org/users");
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["USERS"],
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
        <p key={user.id} className="p-2">
          {user.firstname} {user.lastname}
        </p>
      ))}
    </div>
  );
};

export default Users;
