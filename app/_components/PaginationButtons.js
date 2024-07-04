"use client"

import Link from 'next/link'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

import { useSearchParams } from 'next/navigation';

function PaginationButtons() {
    const searchParams = useSearchParams();
    const page = Number(searchParams.get('page'));
    const term = searchParams.get('term');
    const type = searchParams.get('type');

    return (
        <div className="flex justify-space-between max-w-lg text-blue-500 mb-10">
            {page >= 1 && (
                <Link href={`/search?term=${term}&type=${type}&page=${page - 1}`}>
                    <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                        <ChevronLeftIcon className="h-5" />
                        <p>Previous</p>
                    </div>
                </Link>
            )}

            <Link href={`/search?term=${term}&type=${type}&page=${page + 1}`}>
                <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                    <ChevronRightIcon className="h-5" />
                    <p>Next</p>
                </div>
            </Link>
        </div>
    )
}

export default PaginationButtons
