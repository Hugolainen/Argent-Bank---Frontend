import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/style.css';

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
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title + '(x' + transactionCounter + ')'}</h3>
          <p className="account-amount">{formatedBalance}</p>
          <p className="account-amount-description">{balanceType}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
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
