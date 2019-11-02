import React from 'react';


function QuotesCard({ quotes }){
    return (
        <div>
            <figure className="QuoteCard">
            <img
            src ={quotes.image}
            alt={quotes.character}/>
            <figcaption>
                <blockquote>
                    {quotes.quote}
                </blockquote>
                <cite><p className ="nom-citation flex">{quotes.character}</p></cite>
            </figcaption>
            </figure>
    </div>
    );

}
export default QuotesCard