import cardPic from './assets/diamond.png'

function Card(){
    return(
        <div className='card'>
            <img className= 'card-image' src={cardPic} alt="Card 1 image"></img>
            <h2 className='card-title'>Card 1</h2>
            <p className='card-text'>This is the first card</p>
        </div>
    );
}

export default Card