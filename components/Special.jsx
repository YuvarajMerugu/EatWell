import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Special = ({ special: { image, name, slug, price, calories, highlight } }) => {
    return (
        <div>
            <Link href={`/special/${slug.current}`}>
                <div className="product-card">
                    <img
                        src={urlFor(image && image[0])}
                        width={250}
                        height={250}
                        className="product-image"
                    />
                    <p className="product-name">{name}</p>
                    <p className="extra-info">{calories}&nbsp;{highlight}</p>


                    <p className="product-price">₹{price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Special