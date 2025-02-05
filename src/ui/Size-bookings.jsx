import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom'
import { PAGE_SIZE } from '../utils/constants';
import { useQueryClient } from '@tanstack/react-query';

function SizeBookings({options}) {
    const [searchParams , setSearchParams] = useSearchParams()
    const queryClient = useQueryClient()
    const sortValue = searchParams.get('size-bookings') || PAGE_SIZE;
   
    function handleChange(e){
        searchParams.set('size-bookings',e.target.value)
        setSearchParams(searchParams)
        queryClient.invalidateQueries({
          queryKey : ['bookings']
        })  
    }
  return (
    <Select options={options} type='white' onChange={handleChange} value={sortValue}/>
  )
}

export default SizeBookings