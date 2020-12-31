import React from 'react';
import { Link } from 'react-router-dom'

const Item = ({data}) => {
    const imagePath = `/img/items/${data.img}.jpg`;
    const imageAlt = `${data.name} by ${data.author}`;
    const thicknessLength = data.thickness.length;
    const link = `/product/${data.id}`;
  
    return (
        <div className="item">
            <h2>{data.name}</h2>
            <img src={imagePath} alt={imageAlt} />
            <div className="item_description clearfix">
                <div className="item_description_inner">
                    <div>
                        <p>Author:</p>
                        <span>{data.author}</span>
                    </div>
                    <div>
                        <p className="clearfix">Thickness:</p>
                        <ul className="thickness clearfix">
                            {data.thickness.map((thickness, i) => (
                                (i + 1 !== thicknessLength) ? 
                                    <li key={i}>{thickness},&nbsp;</li> :
                                    <li key={i}>{thickness}mm</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p>Finish:</p>
                        <ul>
                            {data.finish.map((finish, i) => (
                               <li key={i}>{finish}</li> 
                            ))}
                        </ul>  
                    </div>
                </div>
                <div className="item_description_inner">
                    <div>
                        <p>Sizes:</p>
                        <ul>
                            {data.sizes.map((size, i) => (
                                <li key={i}>{size}cm</li> 
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p>Format:</p>
                        <span>{data.format}</span>
                    </div>
                    <div>
                        <p>Prices From:</p>
                        <span>${data.pricing[0]}</span>
                    </div>
                </div>
            </div>
            <div className="item_submit button">
                <Link to={link} style={{color: 'white'}}>BUY</Link>
            </div>
        </div>
    )
};

export default Item;