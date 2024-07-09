"use client";

import Header from "../_components/Header";
import SearchResults from "../_components/SearchResults";
import { useSearchParams } from "next/navigation";
// import useSearch from "../_hook/useSearch";
import HeaderOptions from "../_components/HeaderOptions";
import { useEffect, useState } from "react";

async function fetchResults(term, type, page) {
  const res = await fetch(`/api?term=${term}&type=${type}&page=${page}`, {
    method: 'GET'
  });
  return res.json();
}

const Page = () => {
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  const type = searchParams.get("type");
  const query = { term, type };
  const page = searchParams.get("page");
  
  const [results, setResults] = useState(null);
  
  useEffect(() => {
    if (term && type) {
      fetchResults(term, type, page).then(data => setResults(data));
    }
  }, [term, type, page]);

  return (
    <div>
      <Header query={query} />
      <div className="flex">
        <HeaderOptions term={term} />
        <SearchResults results={results} />
      </div>
    </div>
  );
}

export default Page;
