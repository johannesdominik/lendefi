import React from 'react';
import { round } from '../../helper/converter';
import './LiquidityCard.css';

interface Props {
  logo1: string,
  logo2: string,
  abbreviation1: string,
  abbreviation2: string,
  totalRewards: number,
  poolValue1: number,
  poolValue2: number,
  poolShare: number
}

function LiquidityCard({ logo1, logo2, abbreviation1, abbreviation2, totalRewards, poolValue1, poolValue2, poolShare }: Props) {
  return (
    <div className="liquidity-card">
      <div className="liquidity-card__pool">
        <img className="liquidity-card__image" src={logo1} alt="Asset Icon"/>
        <img className="liquidity-card__image" src={logo2} alt="Asset Icon"/>
        <p>{ abbreviation1 }-{ abbreviation2 }</p>
      </div>
      <p className="liquidity-card__detail">
        <span>Earned Reward (in CTN)</span><span>{ round(totalRewards * poolShare, 8) }</span>
      </p>
      <div className="liquidity-card__detail">
        <span>Pooled { abbreviation1 }</span><span>{ poolValue1 || '0' }</span>
      </div>
      <div className="liquidity-card__detail">
        <span>Pooled { abbreviation2 }</span><span>{ poolValue2 || '0' }</span>
      </div>
      <div className="liquidity-card__detail">
        <span>Pool share</span><span>{ round(poolShare * 100, 2) }%</span>
      </div>
    </div>
  );
}

export default LiquidityCard;