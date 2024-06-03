export default function Text({className, children, ...props}) {
    return <p className={(className ?  className + " " : "") + "text-black dark:text-white"} {...props}>{children}</p>;
}