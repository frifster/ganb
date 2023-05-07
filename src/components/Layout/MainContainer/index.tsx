import styles from './main.module.scss';

interface ContainerProps {
    children: React.ReactNode
}
const MainContainer = (props: ContainerProps) => {
    return (
        <main className={styles.main}>{props.children}</main>
    )
}

export default MainContainer;