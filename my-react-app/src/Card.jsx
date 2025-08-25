import cardPic from './assets/diamond.png'

function Card(){
    return(
        <div className="card">
            <img src={cardPic} alt="Card 1 image"></img>
            <h2>Card 1</h2>
            <p>This is the first card</p>
        </div>
    );
}

export default Card