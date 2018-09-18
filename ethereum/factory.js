import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x0A660371245d8Da49C525b54069A3B8E9F5031C5'
);

export default instance;
