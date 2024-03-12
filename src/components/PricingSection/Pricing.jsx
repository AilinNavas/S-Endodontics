import React from 'react'
import gift from '/src/assets/pricing.gif'
import { CardPricing } from './CardPricing'
export const Pricing = () => {
    return (
        <section className='w-[100vh] h-auto'>
            <div className='w-[80vw] ml-[10vw] flex flex-col my-[10vh] lg:flex-row lg:text-center lg:space-x-6'>

                <CardPricing title={'Those without dental insurance'} description={'Fifty percent of the total will be required when we begin treatment and the balance will be due upon completion of treatment. If we complete treatment in a single visit, payment is due at the time of service.'} />
                <CardPricing title={'Those with dental insurance'} description={'We will estimate the portion your insurance is going to pay. Since this varies for each individual, usually 25 - 75% of the cost of the procedure is required at the time of service.If your insurance pays more than the estimated amount, a refund check from this office will be mailed within 1 month from the date payment is received in this office.'} />

            </div>
            <img className='w-48 h-48 mx-auto' src={gift} alt="" />

        </section >
    )
}
