import Link from 'next/link'
import React from 'react'
import PaginationButtons from './PaginationButtons'

export default function VideoSearchResults({ results }) {
  return (
    <div className='pb-24 mt-4'>
      <div className='grid grid-cols-4 px-4 space-x-4 mb-5'>
        {results.items.map((r) => {
            return (
                <div key={r.id.videoId} className='flex flex-col mb-5 px-3 justify-start'>
                    <a href={`https://www.youtube.com/watch?v=${r.id.videoId}`} target="_blank" rel="noopener noreferrer">
                        <img src={r.snippet.thumbnails.default.url} alt={r.snippet.title}></img>
                    </a>
                    <h3>{r.snippet.title}</h3>
                    <p>{r.snippet.description}</p>
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
