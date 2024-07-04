import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline'
import styles from './HeaderOptions.module.css';

import HeaderOption from './HeaderOption'

function HeaderOptions({term}) {
    return (
        <sidebar className={styles.sidebar}>
            {/* Left */}
                <HeaderOption Icon={SearchIcon} title="All" term={term} />
                <HeaderOption Icon={PhotographIcon} title="Images" term={term} />
                <HeaderOption Icon={PlayIcon} title="Videos" term={term} />
                <HeaderOption Icon={NewspaperIcon} title="News" term={term} />
                <HeaderOption Icon={DotsVerticalIcon} title="More" />

            {/* Right */}
            {/* <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div> */}
        </sidebar>
    )
}

export default HeaderOptions
