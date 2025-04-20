import styles from './DefaultLayout.module.scss';
import Sidebar from '~/components/Layout/component/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className={styles['wrapper']}>
            <Sidebar />
            <div className={styles['content']}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
