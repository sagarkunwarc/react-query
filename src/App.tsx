import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserList } from "./componenets/UserList";
import { UserCreate } from "./componenets/UserCreate";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1> hello world </h1>
        <UserCreate />
        <UserList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
