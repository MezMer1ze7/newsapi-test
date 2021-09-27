const Button = ({title, classes, onClick}) => {
    return (
        <button className={classes} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button
