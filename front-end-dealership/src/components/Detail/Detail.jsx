import './Detail.scss'

function Detail ( {name, year, price, transmission, km, color, version, image1, image2, image3, image4, image5} ) {

    return (
        <section className="detail">
            {/* Left */}
            <article className="left">
                <div className="images">
                    <img src={image1} alt={name} />
                    <img src={image2} alt={name} />
                    <img src={image3} alt={name} />
                    <img src={image4} alt={name} />
                    <img src={image5} alt={name} />
                </div>
            </article>

            {/* Right */}
            <article className="right">
                <div className='table'>
                    <div className="row">
                        <p>{name}</p>
                    </div>
                    <div className="row">
                        <span>Kilometros</span>
                        <p>{km}KM</p>
                    </div>
                    <div className="row">
                        <span>Año</span>
                        <p>{year}</p>
                    </div>
                    <div className="row">
                        <span>Transmisión</span>
                        <p>{transmission}</p>
                    </div>
                    <div className="row">
                        <span>Color</span>
                        <p>{color}</p>
                    </div>
                    <div className="row">
                        <span>Version</span>
                        <p>{version}</p>
                    </div>
                    <div className="row">
                        <p>$US{price}</p>
                    </div>
                </div>

                <div className="form-container">
                    <p>Complete los campos para que un asesor lo contacte</p>
                    <form>
                        <div className="field">
                            <label>Nombre y apellido</label>
                            <input type="text" required />
                        </div>
                        <div className="field">
                            <label>E-mail</label>
                            <input type="mail" required />
                        </div>
                        <div className="field">
                            <label>Telefono</label>
                            <input type="number" required />
                        </div>
                        <div className="field">
                            <label>Elija un horario</label>
                            <select>
                                <option value="">9hs a 12hs</option>
                                <option value="">13hs a 16hs</option>
                                <option value="">17hs a 20hs</option>
                            </select>
                        </div>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </article>
        </section>
    )
}

export default Detail