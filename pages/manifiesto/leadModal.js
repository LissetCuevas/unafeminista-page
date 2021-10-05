import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/sections/Manifiesto.module.css';

import React from 'react'

export default function LeadModal(props) {
    const lead = props;

    return (
        <Modal key={`modal_${lead.name}`} show={lead.show} onHide={lead.handleClose} animation={false} centered size="lg">
            <Modal.Body>
                <Container>
                    <Row className={styles.closeModal}>
                        <a href="#" onClick={lead.handleClose}><img src="/images/icons/close.svg"/></a>
                    </Row>
                    <Row className={styles.modalPad}>
                        <Col xs={12} md={6} className={styles.leadInfoModal}>
                            <h4>{lead.name}</h4>
                            <h6>{lead.position}</h6>
                            <p>{lead.description}</p>
                            <div className={styles.socialModal}>
                                {lead.facebook && 
                                    <a href={lead.facebook} target="_blank" rel="noopener noreferrer">
                                        <img src="/images/icons/social/facebookIcon.svg" alt="facebook"/>
                                    </a>
                                }
                                {lead.instagram && 
                                    <a href={lead.instagram} target="_blank" rel="noopener noreferrer">
                                        <img src="/images/icons/social/instagramIcon.svg" alt="instagram"/>
                                    </a>
                                }
                                {lead.email &&
                                    <a href={lead.email} target="_blank" rel="noopener noreferrer">
                                        <img src="/images/icons/social/emailIcon.svg" alt="mail"/>
                                    </a>
                                }
                                {lead.twitter &&
                                    <a href={lead.twitter} target="_blank" rel="noopener noreferrer">
                                        <img src="/images/icons/social/twitterIcon.svg" alt="twitter"/>
                                    </a>
                                } 
                                {lead.linkedin &&
                                    <a href={lead.linkedin} target="_blank" rel="noopener noreferrer">
                                        <img src="/images/icons/social/linkedinIcon.svg" alt="linkedin"/>
                                    </a>
                                }
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <p className={styles.leadfavInfoModal}>
                                <img src="/images/icons/book.svg"/>{lead.book}
                            </p>
                            <p className={styles.leadfavInfoModal}>
                                <img src="/images/icons/hand.svg"/>{lead.woman}
                            </p>
                            <p className={styles.leadfavInfoModal}>
                                <img src="/images/icons/movie.svg"/>{lead.movie}
                            </p>
                            <div className={`d-flex flex-row ${styles.leadfavQuote}`}>
                                <p className="align-self-end">{lead.quote}</p>
                                <img src="/images/icons/quote.svg"/>
                            </div>
                        </Col>
                    </Row>
                </Container> 
            </Modal.Body>
        </Modal>
    )
};
