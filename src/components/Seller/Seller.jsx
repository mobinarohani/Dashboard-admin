import React from 'react'
import './Seller.css'
export default function Seller() {
    return (
        <div className='seller'>
            <div className="sellerwrapper">
                <h4 className="sellerTitel">بهترین فروشندگان ماه</h4>
                <div className="sellerItem">
                    <div className="sellerbox">
                        <div className="sellerInfo">
                            <span className='sellerName'>نرگس امینی</span>
                            <div className="sellerBoxSale">
                                <span className='sellerNumber'>45000000</span>
                                <span className='sellerSale'>: فروش</span>
                            </div>
                        </div>
                        <img src="avatar2.png" alt="profile" className='sellerProfile' />
                    </div>
                    <div className="sellerbox">
                        <div className="sellerInfo">
                            <span className='sellerName'>مینا اکبری</span>
                            <div className="sellerBoxSale">
                                <span className='sellerNumber'>40000000</span>
                                <span className='sellerSale'>: فروش</span>
                            </div>
                        </div>
                        <img src="avatar33.png" alt="profile" className='sellerProfile' />
                    </div>
                    <div className="sellerbox">
                        <div className="sellerInfo">
                            <span className='sellerName'>سوگل عبادی</span>
                            <div className="sellerBoxSale">
                                <span className='sellerNumber'>35000000</span>
                                <span className='sellerSale'>: فروش</span>
                            </div>
                        </div>
                        <img src="avatar11.png" alt="profile" className='sellerProfile' />
                    </div>
                </div>
            </div>
        </div>

    )
}
