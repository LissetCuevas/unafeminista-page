import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';

export default function NewsletterForm ({status, message, onValidated}) {
    const [ error, setError ] = useState(null);
    const [ email, setEmail ] = useState(null);
   
    const handleFormSubmit = () => {
        setError(null);

        if ( ! email ) {
        setError( 'Please enter a valid email address' );
        return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });
        // On success return true
        return email && email.indexOf("@") > -1 && isFormValidated;
    }

    return (
        <div>
            <h4>¿Te gustaría saber más de nosotras?</h4>
            <p>Suscribete a nuestro newsletter</p>
            <div style={{marginBottom: 15, display: 'flex', flexDirection: 'column'}}>
                <input 
                    type="email" 
                    placeholder="Escribe tu correo electronico" 
                    onChange={(event) => setEmail(event?.target?.value ?? '')}
                />
                <Button variant="primary" type="submit" onClick={handleFormSubmit}>
                    Suscribirme
                </Button>
            </div>
            {status === "sending" && 
                <Alert variant='secondary'style={{padding: 3, fontSize: 15}}>Enviando...</Alert>
            }
            {status === "error" && 
                <Alert variant='warning' style={{padding: 3, fontSize: 15}}>Introduce correctamente tu correo.</Alert>
            }
            {status === "success" && 
                <Alert variant='success' style={{padding: 3, fontSize: 15}}>¡Ya estas suscrita!</Alert>
            }
        </div>
    )
};
