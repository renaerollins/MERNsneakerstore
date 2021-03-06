import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Descriptions title="Info">
                <Descriptions.Item label="Description">{Product.description}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
                <Descriptions.Item label="Price">${Product.price}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="primary"
                    onClick={addToCarthandler} href='/user/cart'
                >
                    Add to Cart
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
