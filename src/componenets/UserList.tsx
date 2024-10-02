import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/User";

export function UserList() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: userService.getUsers,
  });

  return (
    <div>
      List of Users here:
      {isLoading
        ? "Loading..."
        : data?.map((user) => <p key={user.id}>{user.name} </p>)}
    </div>
  );
}
