import React from 'react'
import './Features.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function Features() {
    return (
        <div className='features'>
            <div className="featuresWrapper">
                <h4 className="featureTitel">درآمد</h4>
                <div className="featuresContent">
                    <div className="featureItem">
                        <span className='featureDiscription'>در مقایسه با ماه پیش</span>
                        <div className="featureContainer">
                            <div className="featuresNumber">
                                <span className='featureMainNumber'>$2,415</span>
                                <ProgressBar striped variant="danger" now={40} />
                            </div>
                            <span className='featuresIcons'>
                                -2.5<ArrowDownwardIcon className='featuresIconNavigate' />
                            </span>
                        </div>
                    </div>
                    <div className="featureItem">
                        <span className='featureDiscription'>در مقایسه با دو ماه پیش</span>
                        <div className="featureContainer">
                            <div className="featuresNumber">
                                <span className='featureMainNumber'>$5,415</span>
                                <ProgressBar striped variant="success" now={60} />
                            </div>
                            <span className='featuresIcons'>
                                3.7<ArrowUpwardIcon className='featuresIconPlus' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
