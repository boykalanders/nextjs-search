import React , { useState }from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import styles from './HeaderOptions.module.css';
function HeaderOption({ Icon, title, selected, term }) {

    const router = useRouter();
    
    const handleSubmit = (e) => {
        
        if(e=="All"){
            router.push(`/search?term=${term}&type=all&page=0`)
        }else if(e=="Images"){
            router.push(`/search?term=${term}&type=image&page=0`)
        }
        else if(e=="Videos"){
            router.push(`/search?term=${term}&type=video&page=0`)
        }
        else if(e=="News"){
            router.push(`/search?term=${term}&type=news&page=0`)
        }
    }

    return (
        <div className={styles.item} onClick={() => handleSubmit(title)}>
            <Icon className="hidden sm:inline-flex h-4 mr-2" />
            <p className="hidden sm:inline-flex">{title}</p>
        </div>
    )
}

export default HeaderOption
