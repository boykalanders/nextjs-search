import { DotsVerticalIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline'
import styles from './HeaderOptions.module.css';

import HeaderOption from './HeaderOption'
import { useSearchParams } from 'next/navigation';

function HeaderOptions({term}) {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    return (
        <nav className={styles.sidebar}>
            {/* Left */}
                <HeaderOption selected={type == 'all' && 'active'} Icon={SearchIcon} title="All" term={term} />
                <HeaderOption selected={type == 'image' && 'active'} Icon={PhotographIcon} title="Images" term={term} />
                <HeaderOption selected={type == 'video' && 'active'} Icon={PlayIcon} title="Videos" term={term} />
                <HeaderOption selected={type == 'news' && 'active'} Icon={NewspaperIcon} title="News" term={term} />
                <HeaderOption selected={type == 'others' && 'active'} Icon={DotsVerticalIcon} title="More" term={term} />

            {/* Right */}
            {/* <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div> */}
        </nav>
    )
}

export default HeaderOptions
