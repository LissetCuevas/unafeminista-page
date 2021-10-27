import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Home.module.css';

import React, {useEffect} from 'react'

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
                    <div>
                        <h1>¿Te gustaría saber más de nosotras?</h1>
                        <p>Suscribete a nuestro newsletter</p>
                        <Form action="mailto:unafeminista@hotmail.com" method="POST" enctype="multipart/form-data" name="Mensaje">
                            <Form.Control type="email" placeholder="Escribe tu correo electronico" />
                            <Button variant="primary" type="submit">
                            Suscribirme
                            </Button>
                        </Form>
                    </div>
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
