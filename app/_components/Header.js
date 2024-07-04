"use client";
import { useCallback, useContext, useState } from "react";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import { XIcon } from "@heroicons/react/outline";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";

import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const term = searchParams.get("term");
  const type = searchParams.get("type") || "all";
  const page = searchParams.get("page") || 0;
  const [queryTerm, setQueryTerm] = useState(term);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?term=${queryTerm}&type=${type}&page=${page}`);
  };
  const handleChange = (e) => {
    setQueryTerm(e.target.value);
  };

  return (
    <header className="sticky top-0 bg-white">
      {/* <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet">
            </link> */}
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://dlms.internetmultimediaonline.org/lwappstore/1679922323.png"
          alt="360Nav Browser"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
          priority={true}
        />
        <form
          className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="flex-grow w-full focus:outline-none"
            name="term"
            type="text"
            value={queryTerm}
            onChange={handleChange}
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => {
              setQueryTerm("");
            }}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit">
            Search
          </button>
        </form>

        <img
          loading="lazy"
          className="h-10 rounded-full cursor-pointer transition duration-150  transform hover:scale-110 ml-auto"
          src="https://avatars.githubusercontent.com/u/45622345?v=4"
          alt="profile pic"
        />
      </div>

    </header>
  );
}

export default Header;
