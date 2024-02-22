export default function Text({className, children, ...props}) {
    return <p className={"text-black dark:text-white" + (className ? (" " + className) : "")} {...props}>{children}</p>;
}