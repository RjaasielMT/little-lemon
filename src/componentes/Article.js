import greeksalad from './assets/greeksalad.jpg';
import bruchetta from './assets/bruchetta.svg';
import lemondessert from './assets/lemondessert.jpg'

function Article () {
    return (
        <article className="especiales">
            <header className="head">
                <h1 className="tituloespeciales">This weeks specials</h1>
                <button type="button" class="btn btn-warning"><strong>Online Menu</strong></button>
            </header>
            <main className="tabla">
                <div className="especial">
                    <img className="plato" src={greeksalad} alt="greeksalad"></img>
                    <main className="nombreyprecio">
                        <h1 className="nombre">Greek salad</h1>
                        <h2 className="precio">$12.99</h2>
                    </main>
                    <p className="descripcionespecial">
                        The famous greek salad of <br></br>
                        crispy lettuce, peppers, olives<br></br>
                        and our Chicago style feta <br></br>
                        chees, garnished with<br></br>
                        crunchy garlic.
                    </p>
                    <a href="" className='order'><strong>Order a delivery</strong></a>
                </div>
                <div className="especial">
                    <img className="plato" src={bruchetta} alt="greeksalad"></img>
                    <main className="nombreyprecio">
                        <h1 className="nombre">Bruchetta</h1>
                        <h2 className="precio">$5.99</h2>
                    </main>
                    <p className="descripcionespecial">
                        Our bruchetta is made from <br></br>
                        grilled bread that has been<br></br>
                        smeared with garlic and<br></br>
                        seasoned with salt and olive<br></br>
                        oil.
                    </p>
                    <a href="" className='order'><strong>Order a delivery</strong></a>
                </div>
                <div className="especial">
                    <img className="plato" src={lemondessert} alt="greeksalad"></img>
                    <main className="nombreyprecio">
                        <h1 className="nombre">Lemon dessert</h1>
                        <h2 className="precio">$5.00</h2>
                    </main>
                    <p className="descripcionespecial">
                        This comes straight from<br></br>
                        grandma's recipe book, every<br></br>
                        last ingredient has been<br></br>
                        sourced and is as authentic<br></br>
                        as can be imagined.
                    </p>
                    <a href="" className='order'><strong>Order a delivery</strong></a>
                </div>
            </main>
        </article>
    )
}

export default Article;