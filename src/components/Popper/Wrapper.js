import { faAngleLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Popper.module.scss';
import ButtonIcon from '~/components/ButtonIcon';
import { memo } from 'react';
import clsx from 'clsx';

function Wrapper({ children, title, customClassWrapper, onBack, onCloseHandle, sticky }) {
    return (
        <div className={clsx(styles['wrapper'], customClassWrapper)}>
            {!onBack && (
                <ButtonIcon
                    icon={faXmark}
                    grayColor
                    canHover
                    supperSmall
                    customClassesWrapper={[styles['close-btn']]}
                    onClick={onCloseHandle}
                />
            )}

            <h3 className={styles['title']}>
                {onBack && (
                    <ButtonIcon
                        grayColor
                        canHover
                        supperSmall
                        icon={faAngleLeft}
                        onClick={onBack}
                    />
                )}
                <span>{title}</span>
            </h3>
            <div>{sticky && sticky()}</div>
            {children}
        </div>
    );
}

export default memo(Wrapper);
