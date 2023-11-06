import React from 'react'
import TradeMore from './TradeMore/Trademore'
import ExploreMarkets from './ExploreMarkets/ExploreMarkets'
import UnlockNewFrontiers from './Unlock/UnlockNewFrontiers'
import StartSmall from './StartSmall/StartSmall'
import Derivates from './DerivatesMadeSimple/Derivates'
import BackedBytheBest from './BackedBytheBest/BackedBytheBest'
import Feedbacks from './Feedbacks/Feedbacks'
import Referrels from './Referrels/Referrels'
import TradeTogether from './TradeTogether/Tradetogether'
import Visionaries from './Visionaries/Visionaries'
 
 
const Hero = () => {
  return (
    <div> 
        <TradeMore/>
        <ExploreMarkets/>
        <UnlockNewFrontiers/>
        <StartSmall/>
        <Derivates/>
        <BackedBytheBest />
        <Feedbacks/>
        <Referrels/>
        <TradeTogether/>
        <Visionaries/>
    </div>
  )
}

export default Hero