import styles from './Popper.module.scss';

function Wrapper({ children, title }) {
    return (
        <div className={styles['wrapper']}>
            <h2 className={styles['title']}>{title}</h2>
            {children}
        </div>
    );
}

export default Wrapper;
