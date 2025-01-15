import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom'

function SortBy({options}) {
    const [searchParams , setSearchParams] = useSearchParams()
    const sortValue = searchParams.get('sortBy') || '';
   
    function handleChange(e){
        searchParams.set('sortBy',e.target.value)
        setSearchParams(searchParams)
    }
  return (
    <Select options={options} type='white' onChange={handleChange} value={sortValue}/>
  )
}

export default SortBy