import './SpecialCards.css';
export default function SpecialCards() {
    return (
        <div className="container cards">
            <div className="card cBg">
                <img className="card-img-top cardsImg" src="icons_assets\bruchetta.svg" alt="bruchetta"/>
                <div className="card-body">
                <div className="ctitle">
                <h5 className="card-title">Bruchetta</h5>
                <h5 className="card-title price">$12.99</h5>
                </div>
                <p className="card-text pCards">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                </div>
                <div className="card-footer">
                <a href="/" className="order">Order a Delivery 🚲</a>
                </div>
            </div>
            <div className="card cBg">
                <img className="card-img-top cardsImg" src="icons_assets\greek salad.jpg" alt="Greek Salad"/>
                <div className="card-body">
                <div className="ctitle">
                <h5 className="card-title">Greek Salad</h5>
                <h5 className="card-title price">$5.99</h5>
                </div>
                <p className="card-text pCards">The famous greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                </div>
                <div className="card-footer">
                <a href="/" className="order">Order a Delivery 🚲</a>
                </div>
            </div>
            <div className="card cBg">
                <img className="card-img-top cardsImg" src="icons_assets\lemon dessert.jpg" alt="Lemmon Dessert"/>
                <div className="card-body">
                <div className="ctitle">
                <h5 className="card-title">Lemon Dessert</h5>
                <h5 className="card-title price">$4.99</h5>
                </div>
                <p className="card-text pCards">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </div>
                <div className="card-footer">
                <a href="/" className="order">Order a Delivery 🚲</a>
                </div>
            </div>
        </div>
    );
}