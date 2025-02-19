import { connect } from 'react-redux';
import { RootState } from 'redux/interfaces';
import {
  deleteConnector,
  restartConnector,
  restartTasks,
  pauseConnector,
  resumeConnector,
} from 'redux/reducers/connect/connectSlice';
import {
  getIsConnectorDeleting,
  getConnectorStatus,
  getIsConnectorActionRunning,
} from 'redux/reducers/connect/selectors';

import Actions from './Actions';

const mapStateToProps = (state: RootState) => ({
  isConnectorDeleting: getIsConnectorDeleting(state),
  connectorStatus: getConnectorStatus(state),
  isConnectorActionRunning: getIsConnectorActionRunning(state),
});

const mapDispatchToProps = {
  deleteConnector,
  restartConnector,
  restartTasks,
  pauseConnector,
  resumeConnector,
};

export default connect(mapStateToProps, mapDispatchToProps)(Actions);
