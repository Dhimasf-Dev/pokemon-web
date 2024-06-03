
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import getQueryClient from "../../lib/getQueryClient";
import ListPage from '../../components/pages/ListPage';
import DetailPage from '@/app/components/pages/DetailPage';


const Detail = () => {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <DetailPage />
    </HydrationBoundary>
  );
}


export default Detail
