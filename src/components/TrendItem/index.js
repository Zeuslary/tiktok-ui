import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import styles from './TrendItem.module.scss';

function TrendItem({ trend }) {
    const isPrimary = trend.level === 'hot' || trend.level === 'rising';

    return (
        <li className={styles['search-item']}>
            <FontAwesomeIcon className={clsx(styles['item-icon'], isPrimary && styles['primary'])} icon={trend.icon} />
            <span>{trend.title}</span>
        </li>
    );
}

export default TrendItem;
