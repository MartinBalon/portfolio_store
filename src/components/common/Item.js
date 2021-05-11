import React from 'react';
import { Link } from 'react-router-dom'

const Item = ({ data }) => {
    const imagePath = `/img/items/${ data.img }.jpg`;
    const imageAlt = `${ data.name } by ${ data.author }`;
    const thicknessLength = data.thickness.length;
    const link = `/product/${ data.id }`;
  
    return (
        <div className="item xs-m-t-5 xs-m-b-5 m-t-10px m-b-10px">
            <h2>{ data.name }</h2>
            <img src={ imagePath } alt={ imageAlt } />
            <div className="clearfix xs-p-14px">
                <div className="left xs-w-50 xs-m-t-5 xs-m-b-5">
                    <div className="xs-m-b-5">
                        <p>Author:</p>
                        <span>{ data.author }</span>
                    </div>
                    <div className="xs-m-b-5">
                        <p className="clearfix">Thickness:</p>
                        <ul className="thickness clearfix">
                            {data.thickness.map((thickness, i) => (
                                (i + 1 !== thicknessLength) ? 
                                    <li key={ i }>{ thickness },&nbsp;</li> :
                                    <li key={ i }>{ thickness }mm</li>
                            ))}
                        </ul>
                    </div>
                    <div className="xs-m-b-5">
                        <p>Finish:</p>
                        <ul>
                            {data.finish.map((finish, i) => (
                            <li key={ i }>{ finish }</li> 
                            ))}
                        </ul>  
                    </div>
                </div>
                <div className="left xs-w-50 xs-m-t-5 xs-m-b-5">
                    <div className="xs-m-b-5">
                        <p>Sizes:</p>
                        <ul>
                            {data.sizes.map((size, i) => (
                                <li key={ i }>{ size }cm</li> 
                            ))}
                        </ul>
                    </div>
                    <div className="xs-m-b-5">
                        <p>Format:</p>
                        <span>{ data.format }</span>
                    </div>
                    <div className="xs-m-b-5">
                        <p>Prices From:</p>
                        <span>${ data.pricing[0] }</span>
                    </div>
                </div>
            </div>          
            <Link to={ link }>
                <div className="button xs-w-100px">
                   BUY
                </div>
            </Link>
        </div>
    )
};

export default Item;