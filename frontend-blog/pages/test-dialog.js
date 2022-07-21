import React from 'react'
import DialogCustom from '../components/popup/Dialog'
import ModalCustom from '../components/popup/Modal'

export default function testDialog() {
    return (
        <>
            <div>test-dialog</div>
            <br />
            <p>Modal</p>
            <ModalCustom />
            <hr />

            <p>Dialog</p>
            <DialogCustom />
        </>

    )
}
