import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ModalComp = (props) => {
    const styles = {
        border: "2px solid blue",
        borderRadius: "12px",
        maxWidth: "90vw",
        height: "auto",
        maxHeight: "80vh",
        marginTop: "2%",

    }
    const closeBtn = {
        // paddingTop: "4%",
        marginTop: "5%",
    }
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <p onClick={onOpenModal} >View</p>
            <Modal open={open} onClose={onCloseModal} center style={closeBtn}>
                <img src={props.image} alt="some" style={styles} />

            </Modal>
        </div>
    );
};

export default ModalComp;