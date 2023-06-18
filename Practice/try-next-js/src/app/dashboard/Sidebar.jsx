import Link from 'next/link';
import React from 'react';
const sideLink = [
    {
        path: "/dashboard",
        title: "Dashboard"
    },
    {
        path: "/dashboard/addProduct",
        title: "Add Product"
    },
    {
        path: "/dashboard/manageProduct",
        title: "Manage Product"
    }

]
const Sidebar = () => {
    return (
        <aside className='my-4' >
            <h1 className='text-3xl font-semibold'>Next Hero</h1>
            <ul>
                {
                    sideLink.map(({ path, title }) => (
                        <li key={path} >
                            <Link href={path}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
};

export default Sidebar;