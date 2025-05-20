import React from 'react'

export default async function ProductDetailsPage({ params }: { params: Promise<{ title: string }> }) {
    const title = (await params).title
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">{title}</h1>
            <p className="text-center mt-4">This is the product details page for {title}.</p>
            {/* Add more product details here */}
        </div>
    )
}
