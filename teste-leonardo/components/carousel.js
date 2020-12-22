import React from "react"
import styles from "./carousel.module.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function CarouselSection() {
    var slickOptions = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false
    }
    return (
        <div className={styles.carousel}>
            <div className="max-width">
                <h4>Recomendações:</h4>
                <Slider {...slickOptions}>
                    <div>
                        <p>111111111111</p>
                    </div>
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
