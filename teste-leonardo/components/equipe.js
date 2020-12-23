import Masonry from "react-masonry-css"

export default function Equipe() {
    let items = [
        {
            id: 1,
            name: "João Pereira",
            age: "30",
            role: "Desenvolvedor",
            padding: 140
        },
        {
            id: 2,
            name: "Diogo Fraga",
            age: "30",
            role: "Gestor de Inovação\n Líder ténico",
            padding: 245
        },
        {
            id: 3,
            name: "Bia Ferreira",
            age: "28",
            role: "Designer de Interface",
            padding: 140
        },
        {
            id: 4,
            name: "Michael Bravo",
            age: "34",
            role: "Desenvolvedor Backend",
            padding: 235
        },
        {
            id: 5,
            name: "Bianca Silva",
            age: "33",
            role: "Analista de Qualidade",
            padding: 140
        },
        {
            id: 6,
            name: "Augusto Costa",
            age: "24",
            role: "Desenvolvedor Frontend",
            padding: 240
        },
        {
            id: 7,
            name: "Marco Dias",
            age: "41",
            role: "Desenvolvedor Backend",
            padding: 240
        },
        {
            id: 8,
            name: "Miguel Silva",
            age: "32",
            role: "Desenvolvedor Backend",
            padding: 220
        },
        {
            id: 9,
            name: "Carlos Gomes",
            age: "46",
            role: "Desenvolvedor Fullstack",
            padding: 140
        },
        {
            id: 10,
            name: "Cristiano Souza",
            age: "21",
            role: "Analista de Qualidade",
            padding: 140
        },
        {
            id: 11,
            name: "Bruno Lima",
            age: "36",
            role: "Designer de Interface",
            padding: 30
        }
    ]

    items = items.map(function (item) {
        return (
            <div key={item.id} style={{ paddingTop: item.padding }}>
                <h3>
                    {item.name}, {item.age}
                </h3>
                <p>{item.role}</p>
            </div>
        )
    })

    return (
        <div className="max-width">
            <h3 className="text-center mb-4">A equipe</h3>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {items}
            </Masonry>
        </div>
    )
}
