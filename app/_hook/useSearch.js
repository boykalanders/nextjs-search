// pages/search.js
import { useEffect } from 'react';
import { supabase } from '../_lib/supabaseClient';
import { useSelector } from 'react-redux';

const useSearch = async () => {
    const { searchTerm, type } = useSelector(({ searchQuery }) => searchQuery);

    useEffect(async () => {
        const { data, error } = 
            type ? 
            await supabase
                .from('results')
                .select('*')
                .eq('type', type)
                .ilike('metadata', `%${searchTerm}%`) 
            :
            await supabase
                .from('results')
                .select('*')
                .ilike('metadata', `%${searchTerm}%`)

        if (error) {
            console.error(error);
        } else {
            setResults(data);
        }
    }, [searchTerm, type]);

    return results;
}

export default useSearch;