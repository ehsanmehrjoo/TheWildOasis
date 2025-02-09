import { useMutation } from '@tanstack/react-query';
import { Signup as SignupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

function useSignup() {
  const { mutate: Signup, isLoading } = useMutation({
    mutationFn: ({ email, password }) => SignupApi({ email, password }),
    onSuccess: () => {
      toast.success(`Signup successful`);
    },
    onError: () => {
      toast.error(`Registration failed 😞 Try again`);
    },
  });

  return { Signup, isLoading };  
}

export default useSignup;
