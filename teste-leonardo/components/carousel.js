import styles from "./carousel.module.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Item from "./carouselItem"

export default function CarouselSection() {
    var slickOptions = {
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
    }
    return (
        <div className={styles.carousel}>
            <div className="max-width">
                <h4>Recomendações:</h4>
                <Slider {...slickOptions}>
                    <Item />
                    <div>
                        <p>22222222222222</p>
                    </div>
                    <div>
                        <p>3333333333333</p>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
