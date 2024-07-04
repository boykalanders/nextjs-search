import Image from "next/image";

const ResultItem = ({ result, index }) => {

  const renderSwitch = (result, index) => {
    switch (result.type) {
      case "image":
        return (
          <div key={index} className=" flex max-w-xl mb-8">
            <Image
              src={result.preview_url}
              width={120}
              height={120}
              className="rounded-lg"
              alt={result.title}
            />
            <div className="ml-5">
              <div className="group">
                <a href={result.url}>
                  <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                    {result.title}
                  </h2>
                  <p className="text-sm text-gray-500">{result.url}</p>
                </a>
              </div>
              <p className="line-clamp-2">{result.metadata}</p>
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
              <p className="line-clamp-2">{result.metadata}</p>
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
            <p className="line-clamp-2">{result.metadata}</p>
          </div>
        );
      default:
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
            <p className="line-clamp-2">{result.metadata}</p>
          </div>
        );
    }
  };
  return <>{renderSwitch(result, index)}</>;
};

export default ResultItem;
