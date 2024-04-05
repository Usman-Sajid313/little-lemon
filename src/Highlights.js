import './Highlights.css';
export default function Highlights() {
    return (
        <div className="container-fluid base">
            <div className="sec1 my-4 mx-5">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="hbtn my-3">Reserve a Table</button>
            </div>
            <div>
                <img className="himg my-4 mx-5"src="icons_assets\restauranfood.jpg" alt="Highlights"/>
            </div>
        </div>
    );
}