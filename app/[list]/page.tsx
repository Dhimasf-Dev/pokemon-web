
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import getQueryClient from "../lib/getQueryClient";
import ListPage from '../components/pages/ListPage';


const List = () => {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <ListPage />
    </HydrationBoundary>
  );
}


export default List
