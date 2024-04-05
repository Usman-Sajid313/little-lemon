import './Testimonials.css';
export default function Testimonials() {
    return (
        <>
        <div className="container">
            <h1 className="th1 my-5">Testimonials</h1>
        </div>
        <div className="container my-4 main">
            <section className="tCards">
                <div className="s1 px-3 py-3">
                    <h5>Rating</h5>
                    <h5>⭐⭐⭐⭐⭐</h5> 
                </div>
                <div className="s2 px-4">
                    <img src="icons_assets\1.jpg" alt="alisa"/>
                    <h5>Alisa</h5>
                </div>
                <p className="px-3 py-3">“Best food place in town.”</p>
            </section>
            <section className="tCards">
                <div className="s1 px-3 py-3">
                    <h5>Rating</h5>
                    <h5>⭐⭐⭐⭐⭐</h5> 
                </div>
                <div className="s2 px-4">
                    <img src="icons_assets\2.jpg" alt="John"/>
                    <h5>John</h5>
                </div>
                <p className="px-3 py-3">“Highly Recommended!”</p>
            </section>
            <section className="tCards">
                <div className="s1 px-3 py-3">
                    <h5>Rating</h5>
                    <h5>⭐⭐⭐⭐⭐</h5> 
                </div>
                <div className="s2 px-4">
                    <img src="icons_assets\3.jpg" alt="janice"/>
                    <h5>Janice</h5>
                </div>
                <p className="px-3 py-3">“Best experience.”</p>
            </section>
            <section className="tCards">
                <div className="s1 px-3 py-3">
                    <h5>Rating</h5>
                    <h5>⭐⭐⭐⭐⭐</h5> 
                </div>
                <div className="s2 px-4">
                    <img src="icons_assets\4.jpg" alt="Bruce"/>
                    <h5>Bruce</h5>
                </div>
                <p className="px-3 py-3">“Great Food.”</p>
            </section>
        </div>
        </>
    );
}