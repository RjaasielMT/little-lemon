import restauranfood from './assets/restauranfood.jpg';

function Main () {
    return (
        <main className='main'>
            <article>
            <h1 className='titulo'>Little Lemon</h1>
            <h2 className='Subtitulo'>Chicago</h2>
            <p className='descripciongeneral'>
                We are a family owned Mediterranean<br></br>
                restaurant, focused on traditional<br></br>
                recipes served with a modern twist. <br></br>
                </p>
                <a href='' className='button'><strong>Reserve a table</strong></a>
            </article>
            <div>
                <img className='restauranfood' src={restauranfood} alt='restauranfood'></img>
            </div>
        </main>
    )
}

export default Main;