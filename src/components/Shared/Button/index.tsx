import styles from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

function Button(props: ButtonProps) {
    return (
        <button className={styles.button}>{props.children}</button>
    )
}

export default Button;