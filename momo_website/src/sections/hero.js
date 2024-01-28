import Button from "../components/button";


const Hero = () => {
    return (
        <section className="hero_container section grid">
            <div className="hero_part1">
                <img src="/image/hero1-removebg-preview.png" alt="hero1-removebg-preview.png" />
            </div>
            <div className="flex hero_part2">
                <h4>Welcome</h4>
                <h1> MOMOS <span> HOUSE </span> </h1>
                <p>We provide variety of momos with different taste and prices, taste once and remeber forever.</p>
                <div className="flex buttons_section">
                    <button >Menu</button>
                    <img src="/image/chef1-removebg-preview.png" alt="chef1-removebg-preview"/>
                    <button >Order</button>
                </div>
            </div>
        </section>
    )
};

export default Hero;