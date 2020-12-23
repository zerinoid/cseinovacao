import Masonry from "react-masonry-css"

export default function Equipe() {
    let items = [
        { id: 1, name: "My First Item" },
        { id: 2, name: "Another item" },
        { id: 3, name: "Third Item" },
        { id: 4, name: "Here is the Fourth" },
        { id: 5, name: "High Five" }
    ]

    items = items.map(function (item) {
        return <div key={item.id}>{item.name}</div>
    })

    return (
        <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {items}
        </Masonry>
    )
}
