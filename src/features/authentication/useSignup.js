import { useMutation } from '@tanstack/react-query';
import { Signup as SignupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

function useSignup() {
  const { mutate: Signup, isLoading } = useMutation({
    mutationFn: ({fullName ,  email, password }) => SignupApi({fullName, email, password }),
    onSuccess: () => {
      toast.success(`Account successful created! Please verufy the new account from the user\'s
        email address`); 
    },

    onError: () => {
      toast.error(`Registration failed 😞 Try again`);
    },
  });

  return { Signup, isLoading };  
}

export default useSignup;
