const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'studio',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createTagRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTag', inputVars);
}
createTagRef.operationName = 'CreateTag';
exports.createTagRef = createTagRef;

exports.createTag = function createTag(dcOrVars, vars) {
  return executeMutation(createTagRef(dcOrVars, vars));
};

const listProductIdeasRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProductIdeas');
}
listProductIdeasRef.operationName = 'ListProductIdeas';
exports.listProductIdeasRef = listProductIdeasRef;

exports.listProductIdeas = function listProductIdeas(dc) {
  return executeQuery(listProductIdeasRef(dc));
};

const createFeedbackRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateFeedback', inputVars);
}
createFeedbackRef.operationName = 'CreateFeedback';
exports.createFeedbackRef = createFeedbackRef;

exports.createFeedback = function createFeedback(dcOrVars, vars) {
  return executeMutation(createFeedbackRef(dcOrVars, vars));
};

const getClientProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientProject', inputVars);
}
getClientProjectRef.operationName = 'GetClientProject';
exports.getClientProjectRef = getClientProjectRef;

exports.getClientProject = function getClientProject(dcOrVars, vars) {
  return executeQuery(getClientProjectRef(dcOrVars, vars));
};
