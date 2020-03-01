import React from 'react';

export const Card = ({ gif }) => <div className="card">
    <div className="card-image">
        <figure className="image is-4by3">
            <img src={ gif.image } alt={ gif.title } />
        </figure>
    </div>
    <div className="card-content">
        <p className="content">{ gif.title }</p>
    </div>
</div>;
