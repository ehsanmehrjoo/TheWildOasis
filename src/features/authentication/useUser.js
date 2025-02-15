
// import { useQuery } from "@tanstack/react-query"
// import { getCurrentUser } from "../../services/apiAuth"


// function useUser() {
//  const { data : user , isLoading } =  useQuery({
//    queryFn : getCurrentUser, queryKey: ["user"],
//  })
//  return {user , isLoading , isAuthenticated : user?.role === "authenticated"}
// }

// export default useUser
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

function useUser() {
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["user"],
    retry: false, // جلوگیری از تکرار درخواست در صورت خطا
  });

  const isAuthenticated = user?.user_metadata?.role === "employee";

  return { user, isLoading, isError, error, isAuthenticated };
}

export default useUser;
