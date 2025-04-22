import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Popper.module.scss';
import ButtonIcon from '~/components/ButtonIcon';
import { memo } from 'react';

function Wrapper({ children, title, onCloseHandle }) {
    return (
        <div className={styles['wrapper']}>
            <ButtonIcon
                icon={faXmark}
                grayColor
                canHover
                supperSmall
                customClassesWrapper={[styles['close-btn']]}
                onClick={onCloseHandle}
            />
            <h2 className={styles['title']}>{title}</h2>
            {children}
        </div>
    );
}

export default memo(Wrapper);
