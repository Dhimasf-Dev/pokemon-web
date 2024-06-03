import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { useQuery } from '@tanstack/react-query';
import { setQuery } from '@/app/redux/reducers/searchPokeReducer';

interface SearchBoxProps {
    className?: string;
}

const SearchBox = ({className}: SearchBoxProps) => {
    // const results = useSelector((state: RootState) => state.searchPoke.results);

    const dispatch = useDispatch();
  
    const handleSearch = async (e:string) => {
        dispatch(setQuery(e));
    };
    
  return (
    <div>
        <input onChange={(e:any) => handleSearch(e.target.value)} className={`p-3 pl-6  bg-[#F3F3F3] rounded-full text-sm ${className}`} type='text' placeholder='Search Pokemon ...'/>
    </div>
  )
}

export default SearchBox