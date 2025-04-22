import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import clsx from 'clsx';
import styles from './ButtonIcon.module.scss';

// customClasses is class use to override css of component
// customClassesWrapper is class use to override css of wrapper component
function ButtonIcon({
    icon,
    desc,
    to,
    href,
    src,
    grayColor = false,
    canHover = false,
    supperSmall = false,
    small = false,
    large = false,
    disabled = false,
    customClasses = [],
    customClassesWrapper = [],
    onClick,
    ...passParas
}) {
    let Comp = 'button';

    if (disabled) {
        onClick = null;
    }

    const props = {
        onClick,
        ...passParas,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    // console.log('Custom classes: ', customClassesWrapper);

    const classNames = clsx(
        styles['btnIcon'],
        {
            [styles['grayColor']]: grayColor,
            [styles['canHover']]: canHover,
            [styles['supperSmall']]: supperSmall,
            [styles['small']]: small,
            [styles['large']]: large,
            [styles['disabled']]: disabled,
        },
        ...customClasses,
    );

    return (
        <Comp className={clsx(styles['wrapper'], ...customClassesWrapper)} {...props}>
            <span className={classNames}>
                {src ? (
                    <img className={styles['img']} src={src} alt={desc || 'Avatar'} />
                ) : (
                    <FontAwesomeIcon className={styles['icon']} icon={icon} />
                )}
            </span>
            {desc && <span className={styles['description']}>{desc}</span>}
        </Comp>
    );
}

export default ButtonIcon;
