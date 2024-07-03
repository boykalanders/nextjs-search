import Link from 'next/link'
import React from 'react'
import PaginationButtons from './PaginationButtons'

export default function NewsSearchResults({ results }) {
  return (
    <div className='pb-24 mt-4'>
      <div className='grid grid-cols-4 px-4 space-x-4 mb-5'>
        {results.items.map((r) => {
            return (
                <div key={r.link} className='flex flex-col mb-5 px-3 justify-start'>
                    <img src={r.link} className='h-60 w-80 mb-4 object-contain hover:shadow-xl'/>
                    <Link className='hover:underline w-full mx-auto' href={r.image.contextLink}>{r.title}</Link>
                    <Link className='hover:underline w-full mx-auto' href={r.image.contextLink}>{r.displayLink}</Link>
                </div>
            )
        })}
      </div>
      <div className='pl-52 mb-5'>
        <PaginationButtons />
      </div>
    </div>
  )
}
