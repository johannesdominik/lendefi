import React, { useState } from 'react';
import WalletModal from '../organisms/WalletModal';
import Button from '../atoms/Button';
import Card from '../organisms/Card';
import './LandingPage.css';

function LandingPage() {
  const [walletModal, setWalletModal] = useState(false);


  return (
    <div className="landing-page">
      { walletModal && <WalletModal close={() => setWalletModal(false)}/> }
      <div className="landing-page__cards">
        <Card heading="Borrow Crypto" button={<Button onClick={() => setWalletModal(true)}>Borrow</Button>}>
          <p>Borrow cryptocurrencies and ERC20 tokens without the bureaucracy of a centralized agency.</p>
        </Card>
        <Card heading="Exchange Crypto" button={<Button onClick={() => setWalletModal(true)}>Exchange</Button>}>
          <p>Exchange your cryptocurrencies and ERC20 tokens in a decentralized way.</p>
        </Card>
        <Card heading="Stake Crypto" button={<Button onClick={() => setWalletModal(true)}>Stake</Button>}>
          <p>Do more with your crypto assets. Invest them and earn passive income.</p>
        </Card>
      </div>
    </div>
  );
}

export default LandingPage;