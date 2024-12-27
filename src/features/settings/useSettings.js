import { useQuery } from '@tanstack/react-query'
import { getSettings } from '../../services/apiSettings';

function useSettings() {
   const { data : settings , isLoading , error  } =  useQuery({
    queryKey : ['settings'],
      queryFn : getSettings
   })
   console.log(settings);
  return {settings , isLoading , error }
}

export default useSettings