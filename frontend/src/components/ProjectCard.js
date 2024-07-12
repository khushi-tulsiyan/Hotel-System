import react from 'react';
import {Col} from 'react-bootstrap';

export const ProjectCard = ({title, description, imgUrl, onclick}) => {
    return (
        <Col md={4}>
            <div className='proj-imgbx'>
                {onClick ? (
                    <a href ={onClick} target="_blank" rel="noopener noreferrer">
                        <img src={imgUrl} alt={title} />
                        <div className='proj-txtx'>
                            <h4>{title}</h4>
                            <span>{description}</span>
                        </div>
                    </a>
                ) : (
                    <>
                    <img src={imgUrl} alt={title} />
                    <div className='proj-txtx'>
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                    </>
                )}
            </div>
        </Col>
    );
};