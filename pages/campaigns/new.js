import Rect, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout';

class NewCampaign extends Component {
  state = {
    minContribution: '',
  };
  render() {
    return (
      <Layout>
        <h2>Create a Campaign</h2>
        <Form>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minContribution}
              onChange={(e) =>
                this.setState({ minContribution: e.target.value })
              }
            />
          </Form.Field>
          <Button primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default NewCampaign;
