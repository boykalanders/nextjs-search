'use client'
import * as React from 'react';
import Image from "next/image";
import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon, CameraIcon, UserIcon } from '@heroicons/react/solid'
import { useRouter } from "next/navigation";
import Popover from '@mui/material/Popover';
import Signin from './signin/page';
import Signup from './signup/page';
import { useMemo, useState } from "react";

export default function Home() {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [sign, setSign] = React.useState(false)
  const [ query, setQuery ] = React.useState({
    term: '',
    type: 'all'
  });
  const [page, setPage] = React.useState(0)

  const handleSubmit = (e) => {
      e.preventDefault()
      router.push(`/search?term=${query.term}&type=${query.type}&page=${page}`);
  }

  const handlePopupClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSign = (incomingSign) => {
    setSign(incomingSign);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  const handleChange = (e) => {
    setQuery((prevQuery) => ({
      ...prevQuery,
      term: e.target.value
    }))
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left Div */}
        <div className="flex space-x-4 items-center">
        </div>
        {/* Right Div */}
        <div className="flex space-x-4 items-center">
          {/* Icon */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7917 25.6666L10.325 21.9333C10.0722 21.836 9.83425 21.7194 9.61102 21.5833C9.3878 21.4471 9.16886 21.3013 8.95419 21.1458L5.48336 22.6041L2.27502 17.0624L5.27919 14.7874C5.25975 14.6513 5.25002 14.5203 5.25002 14.3943V13.6068C5.25002 13.48 5.25975 13.3485 5.27919 13.2124L2.27502 10.9374L5.48336 5.39575L8.95419 6.85409C9.16808 6.69853 9.39169 6.5527 9.62503 6.41659C9.85836 6.28047 10.0917 6.16381 10.325 6.06659L10.7917 2.33325H17.2084L17.675 6.06659C17.9278 6.16381 18.1662 6.28047 18.3902 6.41659C18.6142 6.5527 18.8327 6.69853 19.0459 6.85409L22.5167 5.39575L25.725 10.9374L22.7209 13.2124C22.7403 13.3485 22.75 13.48 22.75 13.6068V14.3931C22.75 14.5199 22.7306 14.6513 22.6917 14.7874L25.6959 17.0624L22.4875 22.6041L19.0459 21.1458C18.832 21.3013 18.6084 21.4471 18.375 21.5833C18.1417 21.7194 17.9084 21.836 17.675 21.9333L17.2084 25.6666H10.7917ZM12.8334 23.3333H15.1375L15.5459 20.2416C16.1486 20.086 16.7079 19.8578 17.2235 19.5568C17.7392 19.2558 18.2105 18.891 18.6375 18.4624L21.525 19.6583L22.6625 17.6749L20.1542 15.7791C20.2514 15.5069 20.3195 15.2203 20.3584 14.9193C20.3972 14.6183 20.4167 14.3118 20.4167 13.9999C20.4167 13.688 20.3972 13.382 20.3584 13.0818C20.3195 12.7815 20.2514 12.4945 20.1542 12.2208L22.6625 10.3249L21.525 8.34159L18.6375 9.56659C18.2097 9.11936 17.7384 8.74525 17.2235 8.44425C16.7086 8.14325 16.1494 7.91459 15.5459 7.75825L15.1667 4.66659H12.8625L12.4542 7.75825C11.8514 7.91381 11.2926 8.14247 10.7777 8.44425C10.2628 8.74603 9.79108 9.11042 9.36252 9.53742L6.47502 8.34159L5.33752 10.3249L7.84586 12.1916C7.74864 12.4833 7.68058 12.7749 7.64169 13.0666C7.6028 13.3583 7.58336 13.6694 7.58336 13.9999C7.58336 14.311 7.6028 14.6124 7.64169 14.9041C7.68058 15.1958 7.74864 15.4874 7.84586 15.7791L5.33752 17.6749L6.47502 19.6583L9.36252 18.4333C9.7903 18.8805 10.262 19.255 10.7777 19.5568C11.2934 19.8585 11.8522 20.0868 12.4542 20.2416L12.8334 23.3333ZM14.0584 18.0833C15.1861 18.0833 16.1486 17.6846 16.9459 16.8874C17.7431 16.0902 18.1417 15.1277 18.1417 13.9999C18.1417 12.8721 17.7431 11.9096 16.9459 11.1124C16.1486 10.3152 15.1861 9.91659 14.0584 9.91659C12.9111 9.91659 11.9436 10.3152 11.1557 11.1124C10.3678 11.9096 9.97425 12.8721 9.97503 13.9999C9.9758 15.1277 10.3697 16.0902 11.1569 16.8874C11.944 17.6846 12.9111 18.0833 14.0584 18.0833Z" fill="#222222"/>
          </svg>
          {/* Avatar */}
          <UserIcon className='mr-1 h-8 hidden sm:inline-flex text-1500 pl-1 border-blue-300' aria-describedby={id} onClick={handlePopupClick}></UserIcon>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
        {sign && <Signup onSignChange={handleSign} />}
        { sign ||  <Signin onSignChange={handleSign} />}       
      </Popover>
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5" onSubmit={handleSubmit}>
        <div>
          <div className="float-left">
            <Image className="flex space-x-4" src="/360nav.png" alt="google doodle" height={500} width={100} />
          </div>
          <div className='float-left'><h1 className="font-berkshire text-xxl mt-5 font-semi-bold" >360Nav Browser</h1></div>
        </div>
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <input type="text" value={query.term} className="flex-grow focus:outline-none " onChange={handleChange} /> 
          <MicrophoneIcon className="mr-1 h-6 hidden sm:inline-flex text-blue-500 pl-1 border-gray-300 border-l-2" />
          <CameraIcon className="mr-1 h-6 hidden sm:inline-flex text-blue-500 pl-1 border-gray-300" />
          <SearchIcon className="ml-2 h-6 text-blue-500 hidden sm:inline-flex  " />
        </div>
      </form>
    </main>
  );
}
