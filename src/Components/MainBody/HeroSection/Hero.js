import React from 'react'
import TradeMore from './TradeMore/Trademore'
import ExploreMarkets from './ExploreMarkets/ExploreMarkets'
import UnlockNewFrontiers from './Unlock/UnlockNewFrontiers'
import StartSmall from './StartSmall/StartSmall'
import Derivates from './DerivatesMadeSimple/Derivates'
import BackedBytheBest from './BackedBytheBest/BackedBytheBest'
 
 
const Hero = () => {
  return (
    <div> 
        <TradeMore/>
        <ExploreMarkets/>
        <UnlockNewFrontiers/>
        <StartSmall/>
        <Derivates/>
        <BackedBytheBest />
    </div>
  )
}

export default Hero