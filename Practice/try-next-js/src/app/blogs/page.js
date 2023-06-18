import Link from 'next/link';
import React from 'react';
const blogPage = [
    {
        id: 1,
        year: 2014,
        title: "title 1"
    },
    {
        id: 2,
        year: 2015,
        title: "title 2"
    },
    {
        id: 3,
        year: 2016,
        title: "title 3"
    },
    {
        id: 4,
        year: 2017,
        title: "title 4"
    }
]
const BlogPage = () => {
    return (
        <div className='container mx-auto '>

            {
                blogPage.map(({ id, year, title }) => (
                    <Link
                        key={id}
                        href={{
                            pathname: `/blogs/${year}/${id}`,
                            query: {
                                title: title
                            }

                        }}
                        className='block border border-blue-500 p-2 my-2'
                    >
                        {title}
                    </Link>
                ))
            }


        </div>
    );
};

export default BlogPage;