import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface ClientProject_Key {
  id: UUIDString;
  __typename?: 'ClientProject_Key';
}

export interface CreateFeedbackData {
  feedback_insert: Feedback_Key;
}

export interface CreateFeedbackVariables {
  productIdeaId: UUIDString;
  comment: string;
  type: string;
}

export interface CreateTagData {
  tag_insert: Tag_Key;
}

export interface CreateTagVariables {
  name: string;
}

export interface Feedback_Key {
  id: UUIDString;
  __typename?: 'Feedback_Key';
}

export interface GetClientProjectData {
  clientProject?: {
    id: UUIDString;
    name: string;
    description?: string | null;
    industry?: string | null;
    productIdeas_on_clientProject: ({
      id: UUIDString;
      title: string;
    } & ProductIdea_Key)[];
  } & ClientProject_Key;
}

export interface GetClientProjectVariables {
  id: UUIDString;
}

export interface ListProductIdeasData {
  productIdeas: ({
    id: UUIDString;
    title: string;
    shortDescription?: string | null;
  } & ProductIdea_Key)[];
}

export interface ProductIdeaTag_Key {
  productIdeaId: UUIDString;
  tagId: UUIDString;
  __typename?: 'ProductIdeaTag_Key';
}

export interface ProductIdea_Key {
  id: UUIDString;
  __typename?: 'ProductIdea_Key';
}

export interface Tag_Key {
  id: UUIDString;
  __typename?: 'Tag_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateTagRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTagVariables): MutationRef<CreateTagData, CreateTagVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateTagVariables): MutationRef<CreateTagData, CreateTagVariables>;
  operationName: string;
}
export const createTagRef: CreateTagRef;

export function createTag(vars: CreateTagVariables): MutationPromise<CreateTagData, CreateTagVariables>;
export function createTag(dc: DataConnect, vars: CreateTagVariables): MutationPromise<CreateTagData, CreateTagVariables>;

interface ListProductIdeasRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProductIdeasData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProductIdeasData, undefined>;
  operationName: string;
}
export const listProductIdeasRef: ListProductIdeasRef;

export function listProductIdeas(): QueryPromise<ListProductIdeasData, undefined>;
export function listProductIdeas(dc: DataConnect): QueryPromise<ListProductIdeasData, undefined>;

interface CreateFeedbackRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateFeedbackVariables): MutationRef<CreateFeedbackData, CreateFeedbackVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateFeedbackVariables): MutationRef<CreateFeedbackData, CreateFeedbackVariables>;
  operationName: string;
}
export const createFeedbackRef: CreateFeedbackRef;

export function createFeedback(vars: CreateFeedbackVariables): MutationPromise<CreateFeedbackData, CreateFeedbackVariables>;
export function createFeedback(dc: DataConnect, vars: CreateFeedbackVariables): MutationPromise<CreateFeedbackData, CreateFeedbackVariables>;

interface GetClientProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientProjectVariables): QueryRef<GetClientProjectData, GetClientProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetClientProjectVariables): QueryRef<GetClientProjectData, GetClientProjectVariables>;
  operationName: string;
}
export const getClientProjectRef: GetClientProjectRef;

export function getClientProject(vars: GetClientProjectVariables): QueryPromise<GetClientProjectData, GetClientProjectVariables>;
export function getClientProject(dc: DataConnect, vars: GetClientProjectVariables): QueryPromise<GetClientProjectData, GetClientProjectVariables>;

