import React , { useState }from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

function HeaderOption({ Icon, title, selected }) {

    const searchParams = useSearchParams();
    const router = useRouter();
    const search = searchParams.get('term');
    const [term, setTerm] = useState(search || "")
    
    const handleSubmit = (e) => {
        
        console.log(search)
        if(e=="All"){
            router.push(`/search?term=${term}`)
        }else if(e=="Images"){
            router.push(`/image?term=${term}`)
        }
        else if(e=="Videos"){
            router.push(`/video?term=${term}`)
        }
        else if(e=="News"){
            router.push(`/news?term=${term}`)
        }
    }

    return (
        <div onClick={() => handleSubmit(title)}
            className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer ${
                selected && 'text-blue-500 border-blue-500' 
            }`} 
        >
            <Icon className="h-4" />
            <p className="hidden sm:inline-flex">{title}</p>
        </div>
    )
}

export default HeaderOption
