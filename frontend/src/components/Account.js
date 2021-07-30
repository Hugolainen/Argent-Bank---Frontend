import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Account extends Component {
  formatToCurrency = (amount) => {
    return '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  render() {
    const title = this.props.title;
    const transactionCounter = this.props.transactionCounter;
    const balance = this.props.balance;
    const formatedBalance = this.formatToCurrency(balance);
    const balanceType = this.props.balanceType;

    return (
      <ScAccount>
        <AccountContentWrapper>
          <AccountTitle>{title + '(x' + transactionCounter + ')'}</AccountTitle>
          <AccountAmmount>{formatedBalance}</AccountAmmount>
          <AccountAmountDescription>{balanceType}</AccountAmountDescription>
        </AccountContentWrapper>
        <AccountContentWrapper cta={true}>
          <TransactionButton>View transactions</TransactionButton>
        </AccountContentWrapper>
      </ScAccount>
    );
  }
}

Account.propTypes = {
  title: PropTypes.string,
  transactionCounter: PropTypes.number,
  balance: PropTypes.number,
  balanceType: PropTypes.string,
};

Account.defaultProps = {
  title: 'default account title',
  transactionCounter: 0,
  balance: 0,
  balanceType: 'default balance type',
};

export default Account;

const ScAccount = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const AccountContentWrapper = styled.div`
  width: 100%;
  flex: 1;

  @media (min-width: 720px) {
    flex: ${(props) => props.cta && 0};
  }
`;

const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const AccountAmmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const AccountAmountDescription = styled.p`
  margin: 0;
`;

const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;

  @media (min-width: 720px) {
    width: 200px;
  }
`;
