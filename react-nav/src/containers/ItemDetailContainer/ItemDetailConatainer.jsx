import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetchOne } from "../../helpers/getFetch"

const ItemDetailConatainer = () => {
    const [producto, setProducto] = useState({})

    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        getFetchOne()
            .then((resp) => setProducto(resp))
            .catch(err => console.log(err))            
    }, [])

    
    
    return (
        <div className="border border-1 border-danger">
            <ItemDetail producto={producto} />
            {/* <Input /> */}
            {/* <Caso1 /> */}
            {/* <Caso2 /> */}
        </div>
    )
}
export default ItemDetailConatainer