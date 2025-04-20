import clsx from 'clsx';
import styles from './DefaultLayout.module.scss';
import Sidebar from '~/components/Layout/component/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className={clsx(styles['wrapper'])}>
            <Sidebar />
            <div className={clsx(styles['content'])}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
