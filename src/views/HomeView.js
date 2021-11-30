import { Image, Container, Carousel } from "react-bootstrap"
import { bannerText, urlbanner } from "../assets/HomeAsset"
import "./HomeView.css"
import { Link } from "react-router-dom"

export default function Homeview() {

    const overIamge = {
        position: 'absolute',
        bottom: '2rem'
    }
    return (
        <div>
            <banner className="position-relative"   >
                <img
                    id="bannerimage"
                    src={urlbanner.url1}
                    className="img-fluid"
                />
                <Link id="figcaption" className="nav-link" to="/productos">
                    <figcaption>
                        <h3>
                            {bannerText.title}
                        </h3>
                        <h6>
                            {bannerText.description}
                        </h6>
                    </figcaption>
                </Link>
            </banner>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={urlbanner.url1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={urlbanner.url1}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={urlbanner.url1}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>
    )
}
