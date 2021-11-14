import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xEFbcEfF77a92eAC3321767a226e9508b4e48F4c9'
);

export default instance;
