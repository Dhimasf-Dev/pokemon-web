import HomePage from "../components/pages/HomePage";
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import getQueryClient from "../lib/getQueryClient";



const Home = () => {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <HomePage />
    </HydrationBoundary>
  );
}


export default Home
