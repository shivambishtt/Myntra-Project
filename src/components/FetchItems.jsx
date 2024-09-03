import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../slice/itemSlice.js'
import { fetchLoaderAction } from '../slice/loaderSlice.js'

function FetchItems() {

    const loaderStatus = useSelector((state) => state.fetchStatus)
    const dispatch = useDispatch()

    useEffect(() => {
        if (loaderStatus.fetchDone) return;

        const controller = new AbortController()
        const signal = controller.signal

        dispatch(fetchLoaderAction.markFetchingStarted())
        fetch(`http://localhost:8080/items`, { signal })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                dispatch(fetchLoaderAction.markFetchDone())
                dispatch(fetchLoaderAction.markFetchingEnded())
                dispatch(itemActions.addInitialItems(data.items[0])) //here we are sending the data to the reducer
            })
        return () => {
            controller.abort()
        }
    }, [loaderStatus])

    return (
        <>
        </>
    )
}

export default FetchItems;
