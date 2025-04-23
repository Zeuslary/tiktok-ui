import Tippy from '@tippyjs/react';
import { Wrapper as WrapperPopper } from '~/components/Popper';

const defFun = () => {};

function PopperSidebar({
    render = defFun,
    title,
    visible,
    onClickOutside = defFun,
    onBack = defFun,
    children,
}) {
    return (
        <Tippy
            interactive
            visible={visible}
            onClickOutside={onClickOutside}
            appendTo={'parent'}
            placement="right"
            render={(attrs) =>
                visible && (
                    <WrapperPopper title={title} onCloseHandle={onClickOutside} onBack={onBack}>
                        <div tabIndex="-1" {...attrs}>
                            {render()}
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
