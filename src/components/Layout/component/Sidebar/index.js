import styles from './Sidebar.module.scss';
import clsx from 'clsx';

function Sidebar() {
    return (
        <header className={styles['wrapper']}>
            <aside className={styles['sidebar']}>
                <h4>Sidebar</h4>
            </aside>
        </header>
    );
}

export default Sidebar;
