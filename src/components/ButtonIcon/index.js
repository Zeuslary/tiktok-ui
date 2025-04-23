import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';

import clsx from 'clsx';
import styles from './ButtonIcon.module.scss';

// customClasses is class use to override css of component
// customClassesWrapper is class use to override css of wrapper component
// receive children is submenu
function ButtonIcon({
    icon,
    desc,
    to,
    href,
    src,
    tooltip,
    placement = 'bottom',
    delay,
    visible = false,
    onOpenPopper,
    onHiddenPopper,
    grayColor = false,
    canHover = false,
    supperSmall = false,
    small = false,
    large = false,
    disabled = false,
    customClasses = [],
    customClassesWrapper = [],
    children,
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

    // console.log('Custom classes: ', customClasses);

    const classNamesWrap = clsx(styles['wrapper'], ...customClassesWrapper);

    const classNamesBtnIcon = clsx(styles['btnIcon'], [
        grayColor && styles['grayColor'],
        canHover && styles['canHover'],
        supperSmall && styles['supperSmall'],
        small && styles['small'],
        large && styles['large'],
        disabled && styles['disabled'],
        ...customClasses,
    ]);

    const handleClick = () => {
        visible ? onHiddenPopper() : onOpenPopper();
    };

    return (
        <Comp className={classNamesWrap} {...props} onClick={handleClick}>
            <Tippy
                interactive
                delay={delay}
                placement={placement}
                visible={visible}
                onClickOutside={onHiddenPopper}
                content={
                    <div className={styles['wrap-popper']} onClick={(e) => e.stopPropagation()}>
                        {tooltip && <span className={styles['content-tooltip']}>{tooltip}</span>}
                        {children}
                    </div>
                }
            >
                <span className={classNamesBtnIcon}>
                    {src ? (
                        <img className={styles['img']} src={src} alt={desc || 'Avatar'} />
                    ) : (
                        <FontAwesomeIcon className={styles['icon']} icon={icon} />
                    )}
                </span>
            </Tippy>
            {desc && <span className={styles['description']}>{desc}</span>}
        </Comp>
    );
}

export default ButtonIcon;
