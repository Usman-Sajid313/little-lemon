import './AboutUs.css';
export default function AboutUs() {
    return(
        <div className="container-fluid aBg my-5">
            <div className="container aboutUs py-3">
            <div className="my-5 about1 px-5">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias excepturi cupiditate cum animi nisi voluptatibus aut sit omnis, quisquam quis nobis itaque qui quasi rerum corrupti, id quaerat consequuntur est nihil facilis? Sed ab laborum aut nemo dignissimos deleniti, laudantium ea suscipit rem? Voluptas blanditiis asperiores doloremque natus minima et!</p>
            </div>
            <div className="about2 my-5 px-5">
                <div className="parent">
                    <img className="image1" src="icons_assets\Mario and Adrian A.jpg" alt="owners"></img>
                    <img className="image2" src="icons_assets\Mario and Adrian b.jpg" alt="owners"></img>
                </div>
            </div>
            </div>
        </div>
    );
}