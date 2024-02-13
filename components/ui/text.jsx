export default function Text({classy, children, ...props}) {
    return <p className={"text-black dark:text-white" + (classy ? (" " + classy) : "")} {...props}>{children}</p>;
}