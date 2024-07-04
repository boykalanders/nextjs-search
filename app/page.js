"use client"
import * as React from 'react';
import Image from "next/image";
import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Popover from '@mui/material/Popover';
import Signin from './signin/page';
import Signup from './signup/page';
import { useMemo, useState } from "react";

export default function Home() {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [sign, setSign] = React.useState(false)
  const [ query, setQuery ] = useState({
    term: '',
    type: 'all'
  });
  const page = 0

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
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right Div */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <img
            loading="lazy"
            className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
            src="https://avatars.githubusercontent.com/u/45622345?v=4"
            alt="profile pic"
            title="Click here to go to my GitHub profile"
            aria-describedby={id} variant="contained" onClick={handlePopupClick}
          />
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
        {sign ? (
          <Signup onSignChange={handleSign} />
        ) : (
          <Signin onSignChange={handleSign} />
        )}     
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
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input type="text" value={query.term} className="flex-grow focus:outline-none " onChange={handleChange} /> 
          <MicrophoneIcon className="h-5" />
        </div>
      </form>
    </main>
  );
}
