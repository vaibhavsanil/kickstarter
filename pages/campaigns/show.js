import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import ContributeForm from '../../components/ContributeForm';

import web3 from '../../ethereum/web3';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    // console.log(props.query.address);

    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    // console.log(summary)

    return {
      address: props.query.address,
      minContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minContribution,
      requestsCount,
      approversCount,
    } = this.props;
    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description:
          'The manager created this campaign & create requests to withdraw the money',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: minContribution,
        meta: 'Minimum Contribution (wei)',
        description:
          'You must contribute atleast this much wei to become a approver',
      },
      {
        header: requestsCount,
        meta: 'Number of Requests ',
        description:
          'A request tries to withdraw money from the contract, Request has to approve by the approvers ',
      },
      {
        header: approversCount,
        meta: 'Number of Approvers ',
        description:
          'Number of people who have already donated to this campaign',
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether) ',
        description:
          'The balance is how much money this campaign has left to spend',
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              {' '}
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
