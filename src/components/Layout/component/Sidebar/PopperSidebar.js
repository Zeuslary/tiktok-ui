import Tippy from '@tippyjs/react';
import { Wrapper as WrapperPopper } from '~/components/Popper';

import styles from './Sidebar.module.scss';
import clsx from 'clsx';

const defFun = () => {};

function PopperSidebar({
    title,
    visible,
    sticky = defFun,
    render = defFun,
    onClickOutside = defFun,
    onBack = defFun,
    onHide = defFun,
    children,
}) {
    return (
        <Tippy
            interactive
            visible={visible}
            onClickOutside={onClickOutside}
            appendTo={'parent'}
            placement="right"
            onHide={onHide}
            render={(attrs) =>
                visible && (
                    <WrapperPopper
                        title={title}
                        onCloseHandle={onClickOutside}
                        onBack={onBack}
                        sticky={sticky}
                    >
                        <div tabIndex="-1" {...attrs}>
                            <div
                                className={clsx(
                                    styles['popper-wrap'],
                                    sticky && styles['has-sticky'],
                                )}
                            >
                                {render()}
                            </div>
                        </div>
                    </WrapperPopper>
                )
            }
        >
            {children}
        </Tippy>
    );
}

export default PopperSidebar;
