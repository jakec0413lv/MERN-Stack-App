import React, {useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card/Card';
import Button from '../../shared/components/FormElements/Button/Button';

import Modal
 from '../../shared/components/UIElements/Modal';
import './PlaceItem.css';
import { tsPropertySignature } from '@babel/types';

import { AuthContext } from '../../shared/content/auth-content';
const PlaceItem = props => {
    const auth= useContext(AuthContext);

    const [showMap, setShowMap] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    const openConfirmHandler = () => setShowConfirm(true);
    const closeConfirmHandler = () => setShowConfirm(false);

    const confirmDeleteHandler = () => {
        console.log('DELETING...')
    }
    return (
        <React.Fragment>
            <Modal 
            show={showMap} 
            onCancel={closeMapHandler} 
            header={props.address} 
            contentCLass="place.item__modal-content" 
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className="map-container">
                    <h2>The Map</h2>
                </div>
            </Modal>
            <Modal
            show={showConfirm}
            header="Are you sure?"
            footerClass="place-item__modal-actions"
            footer={
            <React.Fragment>
                <Button inverse onClick={closeConfirmHandler}>Cancel</Button>
                <Button danger onClick={confirmDeleteHandler}>Delete</Button>
            </React.Fragment>}>
                <p>Do you want to proceed and delete this place? Please note that it can't be undone.</p>
            </Modal>
            <li class="place-item">
                <Card className="place-item__content">
                <div className="place-item__image">
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className="place-item__info">
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="place-item__actions">
                    <Button inverse onClick={openMapHandler}> VIEW ON MAP </Button>
                    {auth.isLoggedIn && <Button to={`/places/${props.id}`}>EDIT</Button>}
                    {auth.isLoggedIn &&<Button danger onClick={openConfirmHandler}>DELETE</Button> }
                </div>
                </Card>
            </li>
        </React.Fragment>
    )
    
};

export default PlaceItem;