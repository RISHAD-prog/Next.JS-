"use client"
import { usePathname } from "next/navigation";
import Link from 'next/link';
const NavLink = ({ children, href, activeClassName, ...props }) => {
    const path = usePathname();
    return (
        <div>
            <Link href={href} {...props}>
                {children}
            </Link>
        </div>
    );
};

export default NavLink;