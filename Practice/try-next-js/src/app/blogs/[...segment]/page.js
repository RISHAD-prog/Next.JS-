import React from 'react';
export const metadata = {
    title: 'Blogs | Next Hero',
    description: 'the next js app',
}
const Blogs = ({ params }) => {
    console.log(params.segment);
    const year = params.segment[0];
    return (
        <div>
            Blogs id for year {year} for studentId:{params.segment[1]}
        </div>
    );
};


export default Blogs;