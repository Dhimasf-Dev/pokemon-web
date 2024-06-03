import { QueryClient } from '@tanstack/react-query';

let queryClient: QueryClient | null = null;

const getQueryClient = () => {
  if (!queryClient) {
    queryClient = new QueryClient();
  }
  return queryClient;
};

export default getQueryClient;
