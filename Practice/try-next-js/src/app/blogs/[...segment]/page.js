'use client'
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';
export const metadata = {
    title: 'Blogs | Next Hero',
    description: 'the next js app',
}
const Blogs = ({ params, searchParams }) => {
    console.log(params.segment);
    const [year, id] = params.segment || [];
    const params2 = useParams();
    const searchParams2 = useSearchParams();
    console.log(params2.segment.split('/'), searchParams2.get("title"));
    return (
        <div>
            Blogs id for year {year || new Date().getFullYear()} for studentId:{id}
        </div>
    );
};


export default Blogs;