import PaginationButtons from "./PaginationButtons";
import ResultItem from "./ResultItem";

function SearchResults({ results }) {
  const data = results?.map(item => item._source);
  console.log(data)
  return (
    <>
      <div className="position-relative mx-auto w-full px-3 sm:pl-[2%] md:pl-[3%] lg:pl-10">
        {data?.map((result, index) => (
          <ResultItem result={result} key={index} />
        ))}
      </div>
      <div className="mt-auto">
        <PaginationButtons />
      </div>
    </>
  );
}

export default SearchResults;
