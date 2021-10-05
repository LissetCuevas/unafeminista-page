import Col from 'react-bootstrap/Col';
import LeadModal from './leadModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/sections/Manifiesto.module.css';

import React, { useState } from 'react'

export default function LeadCard(props) {
    const lead = props;
    
    const [show, setShow] = useState(false);

    const handleShow = (event) => {
        event.preventDefault();
        setShow(true);
    };

    const handleClose = (event) => {
        if(event) event.preventDefault();
        setShow(false);
    };
    
    const modalProps = {
        ...lead,
        show: show,
        handleClose: handleClose,
    }

    return (
        <>
        <Col key={lead.name} xs={12} md={3} className="text-center">
            <a href="#" onClick={handleShow}>
            <img src={lead.photo}/>
            <h3>{lead.name}</h3>
            <p>{lead.position}</p>
            <div className={styles.conoceme}>
                <p>Conóceme</p>
                <img src="images/icons/arrow.svg"></img>
            </div>
            </a>
            
            <LeadModal {...modalProps} />
        </Col>
        </>
    )
}
