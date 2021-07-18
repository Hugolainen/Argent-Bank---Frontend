import React, { Component } from 'react';
import Account from '../components/Account';

class UserPage extends Component {
  render() {
    return (
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking"
          transactionCounter={8349}
          balance={2082.79}
          balanceType="View transactions"
        />
        <Account
          title="Argent Bank Savings"
          transactionCounter={6712}
          balance={10928.42}
          balanceType="View transactions"
        />
        <Account
          title="Argent Bank Credit Card"
          transactionCounter={8349}
          balance={184.3}
          balanceType="Current Balance"
        />
      </main>
    );
  }
}
export default UserPage;
