"use client";

import Header from "../_components/Header";
import SearchResults from "../_components/SearchResults";
import { useSearchParams } from "next/navigation";
// import useSearch from "../_hook/useSearch";
import HeaderOptions from "../_components/HeaderOptions";
import { useEffect, useState } from "react";

let images = [
  {
    _source: {
      preview_url:
        "https://traumacareinternational.org/images/programs/630128-citermain.jpg",
      title:
        "Campaign For Improved Trauma And Emergency Response",
      type: "image",
    },
  },
  // {
  //   _source: {
  //     preview_url:
  //       "https://loveworlduk.org/dft-says-rail-benefits-to-come-10-years-early-amid-fury-over-cuts-to-hs2-scheme/",
  //     title:
  //       "DfT says rail benefits to come 10 years early amid fury over cuts to HS2 scheme - Loveworld UK",
  //     type: "image",
  //   },
  // },
  {
    _source: {
      preview_url:
        "https://www.lxp.tv/wp-content/uploads/2020/03/Adams-Oshiomhole-1.jpg",
      title: "APC will bounce back stronger, says Oshiomhole",
      type: "image",
    },
  },
  // {
  //   _source: {
  //     preview_url:
  //       "https://loveworlduk.org/obama-urges-fight-for-healthcare-law/",
  //     title: "Obama urges 'fight' for healthcare law - Loveworld UK",
  //     type: "image",
  //   },
  // },
  {
    _source: {
      preview_url:
        "https://www.lxp.tv/wp-content/uploads/2019/04/tmbook.png",
      title: "World Loveworld Day",
      type: "image",
    },
  },
  {
    _source: {
      preview_url:
        "https://www.lxp.tv/wp-content/uploads/2020/02/abiodun-and-buhari.jpeg",
      title: "Featured Archives - Loveworld XP",
      type: "image",
    },
  },
  {
    _source: {
      preview_url:
        "https://christembassy.org/wp-content/uploads/2019/09/Christ-Embassy-Apps-600-by-400.jpg",
      title: "Life Of A Preacher's Kid Archives - Loveworld XP",
      type: "image",
    },
  },
];

async function fetchResults(term, type, page) {
  // let res = await fetch(`http://loveworldtrainingcentre.net/dictionarycms/getWord.php?word=${term}`)
  const resMedia = await fetch(`/api?term=${term}&type=${type}&page=${page}`, {
    method: "GET",
  });
  if (type == "image") {
    return images;
  } else {
    return shuffleObjectArray(resMedia.json());
  }
}

function shuffleObjectArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
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
      fetchResults(term, type, page).then((data) => setResults(data));
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
};

export default Page;
