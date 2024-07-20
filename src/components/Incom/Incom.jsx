import React from 'react'
import './Incom.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import useFetch from '../../Hooks/useFetch';
export default function Incom() {

    const{getData , isPending}=useFetch('IncomReport')

    return (
        <div className='Incom'>
            <div className="IncomWrapper">
                <h4 className="IncomTitel">درآمد</h4>
                <div className="IncomContainer">
                    {isPending && <div>Loding ...</div>}
                    {getData.map(incom => (
                        <div className="IncomContent">
                            <div className="IncomItem">
                                <span className='featureDiscription'>{incom.name}</span>
                                <img src={incom.img} alt="picture" className="IncomImg" />
                                <div className="IncomNumber">
                                    <span className='featureMainNumber'>{incom.price}</span>
                                    <ProgressBar striped variant={incom.variant} now={incom.percent} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
