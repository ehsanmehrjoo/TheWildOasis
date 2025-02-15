import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Login as apiLogin } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading: isLoadingLogin } = useMutation({
    mutationFn: ({ email, password }) => apiLogin({ email, password }),

    onSuccess: (response) => {
      const user = response?.user;
      const role = user?.user_metadata?.role;

      if (role === "employee") {
        queryClient.setQueryData(["user"], user);
        navigate(`/dashboard`, { replace: true });
        toast.success("Login Successful");
      } else {
        toast.error("Access denied: Only employees are allowed to log in.");
      }
    },

    onError: (err) => {
      console.error("Login Error:", err);
      const errorMessage = err?.message || "Provided email or password are incorrect.";
      toast.error(errorMessage);
    },
  });

  return { login, isLoadingLogin };
}

export default useLogin;
