import NoPopper from './NoPopper';
import HasPopper from './HasPopper';

function MenuItem({ item, ...props }) {
    const hasChildren = !!item.children;

    return (
        <li>
            {hasChildren ? (
                <HasPopper item={item} {...props} />
            ) : (
                <NoPopper item={item} {...props} />
            )}
        </li>
    );
}

export default MenuItem;
