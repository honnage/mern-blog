import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function CustomizedDialogs() {
    const [showModal, setShowModal] = useState(false);

    const ModalClose = () => setShowModal(false);
    const ModalShow = () => setShowModal(true);

    return (
        <div>
            <Button variant="primary" onClick={ModalShow}>
                Launch demo modal
            </Button>

            <Modal show={showModal} onHide={ModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ModalClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
