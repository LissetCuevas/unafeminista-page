import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import NewsletterForm from './newsletterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Home.module.css';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import React, {useEffect} from 'react'

const url = "https://linktr.us5.list-manage.com/subscribe/post?u=b1fe6a5e8ea37a86dc1c29f51&amp;id=50bff0a552";

export default function NewsLetterModal() {
    const [visible, setVisible] = React.useState(false);
    
    useEffect(()=>{
        let pop_status = localStorage.getItem('pop_status');
        console.log(pop_status)
        if(!pop_status){
            setVisible(true);
            localStorage.setItem('pop_status',1);
        }
    },[])
    if(!visible) return null;
    
    const handleClose = (event) => {
        if(event) event.preventDefault();
        setVisible(false);
    };

    return (
        <Modal show={visible} onHide={handleClose} animation={false} centered size="lg">
            <Modal.Body className={styles.modal}>
                <Container>
                <Row className={styles.closeModal}>
                   <a href="#" onClick={handleClose}><img src="/images/icons/close.svg"/></a>
                </Row>
                <Row className={styles.modalPad}>
                <div className={styles.modalContainter}>
                    <MailchimpSubscribe 
                        url={url}
                        render={({ subscribe, status, message}) => (
                            <NewsletterForm
                                status={ status }
                                message={ message }
                                onValidated={ formData => subscribe( formData ) }
                            />
                        )}
                    />
                    <div>
                        <img src="/images/imageNewsLetter.png" className={styles.modalImage}/>
                    </div>
                </div> 
                </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
};
