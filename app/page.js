import Image from "next/image";
import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
          />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5" onSubmit={search}>
        <div>
          <div className="float-left">
            <Image className="flex space-x-4" src="/360nav.png" alt="google doodle" height={500} width={100} />
          </div>
          <div className='float-left'><h1 class="font-berkshire text-xxl mt-5 font-semi-bold" >360Nav Browser</h1></div>
        </div>


        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none " />
          <MicrophoneIcon className="h-5" />
        </div>
      </form>
    </main>
  );
}
