import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagSliceActions } from '../slice/bagSlice.js'

function HomeItem({ item }) {
    const bag = useSelector((store) => store.bag)
    const bagId = bag.indexOf(item.id) >= 0
    const dispatch = useDispatch()

    const addItemInBag = () => {
        dispatch(bagSliceActions.addToBag(item.id))
    }
    const removeItemFromBag = () => {
        dispatch(bagSliceActions.removeFromBag(item.id))
    }

    return (
        <div>
            <div className="item-container">
                <img className="item-image" src={item.image} alt="item image" />
                <div className="rating">
                    {item.rating.stars} ⭐ | {item.rating.count}
                </div>
                <div className="company-name">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price">
                    <span className="current-price">Rs {item.current_price}</span>
                    <span className="original-price">Rs {item.original_price}</span>
                    <span className="discount">({item.discount_percentage}% OFF)</span>
                </div>
                {bagId ? <button
                    type="button"
                    onClick={removeItemFromBag}
                    className="btn btn-danger btn-add-bag">
                    Remove</button> : <button
                        type="button"
                        className="btn btn-success btn-add-bag"
                        onClick={addItemInBag}>
                    Add To Bag</button>}


            </div>

        </div >
    )
}

export default HomeItem
