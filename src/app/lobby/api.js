import axios from 'axios';
import config from '../config';

const Root = 'http://'+config.IP+':'+config.PORT;
const Domain = '/lobby';
const BaseUrl = Root+Domain;

export const roomBody = async (gameType) => {
    return await axios.get(BaseUrl+'/room/'+gameType);
};
