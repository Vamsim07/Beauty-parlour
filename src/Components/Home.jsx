import parlourLogo from "../assets/Varshini_Beauty_Logo.png"
function Home() {
    return(<>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={parlourLogo} alt="logo" height="370px" width="370px"/>
            </div>
            <div className="col-md-6">
                <h1 className="heading text-center fw-semibold mt-5">Welcome To <span className="text-danger">Varshini</span> Beauty Parlour</h1>
                <h3 className="text-center fst-italic lead m-3">Your beauty, our artistry 💖</h3>
                <p className="fst-italic fw-bold text-center">Where confidence begins and beauty blooms.<br/> We blend creativity and care to create looks that mirror your inner glow.<br /> Discover a space of calm, color, and charm — because you deserve to feel radiant, always. 🌷</p>

                <div class="d-flex justify-content-center gap-3">
                    <a href="https://instagram.com/" target="_blank" class="text-decoration-none text-info fs-4">
                    <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://facebook.com/" target="_blank" class="text-decoration-none text-info fs-4">
                    <i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://wa.me/919876543210" target="_blank" class="text-decoration-none text-info fs-4">
                    <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://youtube.com/" target="_blank" class="text-decoration-none text-info fs-4">
                    <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default Home; 