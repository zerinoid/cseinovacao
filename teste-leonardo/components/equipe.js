import Masonry from "react-masonry-css"

export default function Equipe() {
    let items = [
        { id: 1, name: "João Pereira", age: "30", role: "Desenvolvedor" },
        {
            id: 2,
            name: "Bianca Silva",
            age: "33",
            role: "Analista de Qualidade"
        },
        {
            id: 3,
            name: "Carlos Gomes",
            age: "46",
            role: "Desenvolvedor Fullstack"
        },
        {
            id: 4,
            name: "Diogo Fraga",
            age: "30",
            role: "Gestor de Inovação\n Líder ténico"
        },
        {
            id: 5,
            name: "Augusto Costa",
            age: "24",
            role: "Desenvolvedor Frontend"
        },
        {
            id: 6,
            name: "Bia Ferreira",
            age: "28",
            role: "Designer de Interface"
        },
        { id: 7, name: "Marco Dias", age: "41", role: "Desenvolvedor Backend" },
        {
            id: 8,
            name: "Cristiano Souza",
            age: "21",
            role: "Analista de Qualidade"
        },
        {
            id: 9,
            name: "Michael Bravo",
            age: "34",
            role: "Desenvolvedor Backend"
        },
        {
            id: 10,
            name: "Miguel Silva",
            age: "32",
            role: "Desenvolvedor Backend"
        },
        { id: 11, name: "Bruno Lima", age: "36", role: "Designer de Interface" }
    ]

    items = items.map(function (item) {
        return <div key={item.id}>{item.name}</div>
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
