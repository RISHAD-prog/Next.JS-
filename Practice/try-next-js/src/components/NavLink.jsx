"use client"
import { usePathname } from "next/navigation";
import Link from 'next/link';
import classNames from "@/utils/classNames";
const NavLink = ({ children, exact = false, href, activeClassName, ...props }) => {
    const path = usePathname();
    const active = exact ? path == href : path.startsWith(href);
    const classes = classNames(props.className, active && activeClassName);
    if (classes) {
        props.className = classes;
    }
    return (
        <div>
            <Link href={href} {...props}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;