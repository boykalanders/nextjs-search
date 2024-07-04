"use client"

import Head from 'next/head'
import Header from '../_components/Header';
import SearchResults from '../_components/SearchResults';
import { useSearchParams } from 'next/navigation';
import useSearch from '../_hook/useSearch';

const Page = () => {
    const searchParams = useSearchParams();
    const term = searchParams.get('term');
    const type = searchParams.get('type');
    const query = {term, type};
    const page = searchParams.get('page');
    const results = useSearch(query, page);
    return (
        <div>
            {/* Header */}
            <Header query={query} />

            {/* Search Results */}
            <SearchResults results={results} />
        </div>
    )
}

export default Page
