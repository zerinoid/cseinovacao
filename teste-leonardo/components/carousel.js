import styles from "./carousel.module.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Item from "./carouselItem"

export default function Carousel() {
    const NextArrow = props => {
        const { className, style, onClick } = props
        return (
            <img
                src="/images/arrow-right.svg"
                alt="next"
                className={className}
                style={{
                    ...style,
                    right: "0.6vw",
                    width: "1vw",
                    height: "auto"
                }}
                onClick={onClick}
            />
        )
    }

    const PrevArrow = props => {
        const { className, style, onClick } = props
        return (
            <img
                alt="prev"
                src="/images/arrow-left.svg"
                className={className}
                style={{
                    ...style,
                    zIndex: "1",
                    left: "0.6vw",
                    width: "1vw",
                    height: "auto"
                }}
                onClick={onClick}
            />
        )
    }

    var slickOptions = {
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: false,
        dots: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    fade: true
                }
            }
        ]
    }

    return (
        <div className={styles.carousel}>
            <div className="max-width">
                <h4>Recomendações:</h4>
                <Slider {...slickOptions}>
                    <Item n={1} title={"Organize seu tempo"}>
                        Verifique quanto tempo você tem disponível para realizar
                        o teste com eficiência então crie pequenas metas para
                        manter o ritmo.
                    </Item>
                    <Item n={2} title={"Tire suas dúvidas"}>
                        Se houver alguma dúvida, procure o aplicador do teste,
                        assim você terá melhores chances de entregar o que foi
                        proposto.
                    </Item>
                    <Item n={3} title={"Seja Criativo"}>
                        Existem várias formas de resolver uma questão de html e
                        css ou javascript, mostre que você domina a melhor.
                    </Item>
                </Slider>
            </div>
        </div>
    )
}
