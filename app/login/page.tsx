import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import getQueryClient from "../lib/getQueryClient";
import LoginPage from '../components/pages/loginPage';

const Login = () => {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <LoginPage />
    </HydrationBoundary>
  );
}


export default Login
