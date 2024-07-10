import Image from "next/image";

const ResultItem = ({ result, index }) => {
  console.log(result)
  const renderSwitch = (result, index) => {
    switch (result.type) {
      case "image":
        return (
          <div key={index} className=" flex max-w-xl mb-8">
            <a href={result.preview_url}>
              <Image
                src={result.preview_url}
                width={120}
                height={120}
                className="rounded-lg"
                alt={result.title}
              />
            </a>
            <div className="ml-5">
              <div className="group">
                <a href={result.preview_url}>
                  <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                    {result.title}
                  </h2>
                  <p className="text-sm text-gray-500">{result.preview_url}</p>
                </a>
              </div>
              {/* {result.meta_description && (
                <p className="line-clamp-2">{result.meta_description}</p>
              )} */}
            </div>
          </div>
        );
      case "video":
        return (
          <div key={index} className=" flex max-w-xl mb-8">
            <video
              width={260}
              height={260}
              controls
              poster={result.preview_url}
            >
              <source src={result.url} type="video/mp4" />
            </video>
            <div className="ml-5">
              <div className="group">
                <a href={result.url}>
                  <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                    {result.title}
                  </h2>
                </a>
              </div>
              {result.meta_description && (
                <p className="line-clamp-2">{result.meta_description}</p>
              )}
            </div>
          </div>
        );
      case "news":
        return (
          <div key={index} className="max-w-xl mb-8">
            <div className="group">
              <a href={result.url}>
                <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                  {result.title}
                </h2>
                <p className="text-sm text-gray-500">{result.url}</p>
              </a>
            </div>
            {result.meta_description && (
              <p className="line-clamp-2">{result.meta_description}</p>
            )}
          </div>
        );
      default:
        return (
          <>
            {result.url ? (
              <div key={index} className="mb-8">
                <div className="group">
                  <a href={result.url}>
                    <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                      {result.title}
                    </h2>
                    <p className="text-sm text-gray-500">{result.url}</p>
                  </a>
                </div>
                {result.meta_description && (
                  <p className="line-clamp-2">{result.meta_description}</p>
                )}
              </div>
            ) : (
              <div key={index} className="mb-8">
                <h3>Dictionary</h3>
                <div className="group">
                  <h3>{result.term}</h3>
                </div>
                {result.meta_description && (
                  <p className="line-clamp-2">{result.meta_description}</p>
                )}
              </div>
            )}
          </>
        );
    }
  };
  return <>{renderSwitch(result, index)}</>;
};

export default ResultItem;
