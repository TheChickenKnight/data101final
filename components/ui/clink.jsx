const { default: Link } = require("next/link");

export default function Clink({ children, ...props }) {
    return <Link className="text-blue-400 hover:underline" {...props}>{children}</Link>
}