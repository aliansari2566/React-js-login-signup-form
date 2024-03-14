import React, { useState } from 'react'
import { Step } from '../components/Step'
import { BasicDetails } from '../components/BasicDetails'
import { ContactDetails } from '../components/ContactDetails';
import NomineeDetails from '../components/NomineeDetails';
import AttorneyDetails from '../components/AttorneyDetails';
import OtherDetails from '../components/OtherDetails';

const totalSteps = 5;

export const Signup = () => {

    const [currentStep, setCurrentStep] = useState(0);

    const moveToNextStep = () => {
        setCurrentStep(prev => {
            if (prev === totalSteps - 1) {
                return prev;
            }
            return prev + 1
        });
    }

    const moveToPrevStep = () => {
        setCurrentStep(prev => {
            if (prev === 0) {
                return prev;
            }
            return prev - 1
        });
    }

    const stepTitles = [
        'BasicDetails', 'ContactDetails', 'NomineeDetails', 'AttorneyDetails', 'OtherDetails'
    ];

    const stepComponents = [
        <BasicDetails moveToNextStep={moveToNextStep} moveToPrevStep={moveToPrevStep}/>,
        <ContactDetails moveToNextStep={moveToNextStep} moveToPrevStep={moveToPrevStep}/>,
        <NomineeDetails moveToNextStep={moveToNextStep} moveToPrevStep={moveToPrevStep}/>,
        <AttorneyDetails moveToNextStep={moveToNextStep} moveToPrevStep={moveToPrevStep}/>,
        <OtherDetails moveToNextStep={moveToNextStep} moveToPrevStep={moveToPrevStep}/>,
    ];

    return (
        <div className='row'>
            <div className='col-lg-6'>
                <Step className='navigation_steps' currentStep={currentStep} stepTitles={stepTitles} customIconSize={50}  finishIconBorderColor="black"
        dotSize={18}
        titleLineHeight={24}/>
            </div>



            <div className='col-lg-6'>
                {stepComponents[currentStep]}
            </div>

        </div>
    )
}
