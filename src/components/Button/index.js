import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import styles from './Button.module.scss';

// customClasses is class use to override css of component
function Button({
    leftIcon,
    rightIcon,
    primary = false,
    outline = false,
    round = false,
    disabled = false,
    to,
    href,
    greyColor = false,
    small = false,
    large = false,
    noGap,
    canHover,
    children,
    customClasses = [],
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

    const classnames = clsx(
        styles['btn'],
        [
            primary && styles['primary'],
            greyColor && styles['greyColor'],
            outline && styles['outline'],
            disabled && styles['disabled'],
            round && styles['round'],
            small && styles['small'],
            large && styles['large'],
            noGap && styles['noGap'],
            canHover && styles['canHover'],
        ],
        ...customClasses,
    );

    return (
        <Comp className={classnames} {...props}>
            {leftIcon && (
                <span className={styles['icon']}>
                    <FontAwesomeIcon icon={leftIcon} />
                </span>
            )}
            <span className={styles['title']}>{children}</span>
            {rightIcon && (
                <span className={styles['icon']}>
                    <FontAwesomeIcon icon={rightIcon} />
                </span>
            )}
        </Comp>
    );
}

export default Button;
