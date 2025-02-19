import { connect } from 'react-redux';
import { RootState } from 'redux/interfaces';
import { fetchConnectorConfig } from 'redux/reducers/connect/connectSlice';
import {
  getIsConnectorConfigFetching,
  getConnectorConfig,
} from 'redux/reducers/connect/selectors';

import Config from './Config';

const mapStateToProps = (state: RootState) => ({
  isConfigFetching: getIsConnectorConfigFetching(state),
  config: getConnectorConfig(state),
});

const mapDispatchToProps = {
  fetchConfig: fetchConnectorConfig,
};

export default connect(mapStateToProps, mapDispatchToProps)(Config);
