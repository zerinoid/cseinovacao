import styles from "./carousel.module.scss"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Item from "./carouselItem"

export default function Carousel() {
    let items = [
        {
            id: 1,
            title: "Organize seu tempo",
            content:
                "Verifique quanto tempo você tem disponível para realizar o teste com eficiência então crie pequenas metas para manter o ritmo."
        },
        {
            id: 2,
            title: "Tire suas dúvidas",
            content:
                "Se houver alguma dúvida, procure o aplicador do teste, assim você terá melhores chances de entregar o que foi proposto."
        },
        {
            id: 3,
            title: "Seja Criativo",
            content:
                " Existem várias formas de resolver uma questão de html e css ou javascript, mostre que você domina a melhor. "
        },
        {
            id: 4,
            title: "Nullam rutrum",
            content:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus."
        }
    ]

    const NextArrow = props => {
        const { className, style, onClick } = props
        return (
            <img
                src="/images/arrow-right.svg"
                alt="next"
                className={className}
                style={{
                    ...style,
                    right: 0,
                    height: "auto",
                    width: 22
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
                    left: 0,
                    height: "auto",
                    width: 22
                }}
                onClick={onClick}
            />
        )
    }

    var slickOptions = {
        centerMode: true,
        centerPadding: "160px",
        slidesToShow: 2,
        infinite: true,
        slidesToScroll: 1,
        dots: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <div className={styles.carousel}>
            <div className="max-width">
                <h4 className="mb-3">Recomendações:</h4>
                <Slider {...slickOptions}>
                    {items.map(item => {
                        return (
                            <Item key={item.id} n={item.id} title={item.title}>
                                {item.content}
                            </Item>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
