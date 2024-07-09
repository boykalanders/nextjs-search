"use client"

import { useEffect, useMemo, useState } from 'react';
import { supabase } from '../_lib/supabaseClient';

export const ITEMS_PER_PAGE = 20;

async function fetchData(query, page) {
    const { term, type } = query;

    const from = page * ITEMS_PER_PAGE;
    const to = from + ITEMS_PER_PAGE - 1;
    const { data, error } =
        type != 'all' ?
            (await supabase
                .from('results')
                .select('*')
                .eq('type', type)
                .ilike('metadata', `%${term}%`)
                .range(from, to))
            :
            (await supabase
                .from('results')
                .select('*')
                .ilike('metadata', `%${term}%`)
                .range(from, to)
            )
    if (error) console.error(error);

    return data;
}

const useSearch = (query, page) => {
    const { term, type } = query;
    const [results, setResults] = useState(useMemo(() => [], []));

    // useEffect(() => {
    //     async function fetch() {
    //         const data = await fetchData(query, page);    
    //         setResults(data);
    //     }
    //     fetch();
    // }, [page, term, type])
    return results;
}

export default useSearch;