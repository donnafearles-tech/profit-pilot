import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'studio',
  location: 'us-east4'
};

export const createTagRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateTag', inputVars);
}
createTagRef.operationName = 'CreateTag';

export function createTag(dcOrVars, vars) {
  return executeMutation(createTagRef(dcOrVars, vars));
}

export const listProductIdeasRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProductIdeas');
}
listProductIdeasRef.operationName = 'ListProductIdeas';

export function listProductIdeas(dc) {
  return executeQuery(listProductIdeasRef(dc));
}

export const createFeedbackRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateFeedback', inputVars);
}
createFeedbackRef.operationName = 'CreateFeedback';

export function createFeedback(dcOrVars, vars) {
  return executeMutation(createFeedbackRef(dcOrVars, vars));
}

export const getClientProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetClientProject', inputVars);
}
getClientProjectRef.operationName = 'GetClientProject';

export function getClientProject(dcOrVars, vars) {
  return executeQuery(getClientProjectRef(dcOrVars, vars));
}

