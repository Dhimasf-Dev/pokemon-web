import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import getQueryClient from "../lib/getQueryClient";
import RegisterPage from "../components/pages/registerPage";

const Register = () => {
  const queryClient = getQueryClient();
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <RegisterPage />
    </HydrationBoundary>
  );
}


export default Register
