import { CreateTagData, CreateTagVariables, ListProductIdeasData, CreateFeedbackData, CreateFeedbackVariables, GetClientProjectData, GetClientProjectVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateTag(options?: useDataConnectMutationOptions<CreateTagData, FirebaseError, CreateTagVariables>): UseDataConnectMutationResult<CreateTagData, CreateTagVariables>;
export function useCreateTag(dc: DataConnect, options?: useDataConnectMutationOptions<CreateTagData, FirebaseError, CreateTagVariables>): UseDataConnectMutationResult<CreateTagData, CreateTagVariables>;

export function useListProductIdeas(options?: useDataConnectQueryOptions<ListProductIdeasData>): UseDataConnectQueryResult<ListProductIdeasData, undefined>;
export function useListProductIdeas(dc: DataConnect, options?: useDataConnectQueryOptions<ListProductIdeasData>): UseDataConnectQueryResult<ListProductIdeasData, undefined>;

export function useCreateFeedback(options?: useDataConnectMutationOptions<CreateFeedbackData, FirebaseError, CreateFeedbackVariables>): UseDataConnectMutationResult<CreateFeedbackData, CreateFeedbackVariables>;
export function useCreateFeedback(dc: DataConnect, options?: useDataConnectMutationOptions<CreateFeedbackData, FirebaseError, CreateFeedbackVariables>): UseDataConnectMutationResult<CreateFeedbackData, CreateFeedbackVariables>;

export function useGetClientProject(vars: GetClientProjectVariables, options?: useDataConnectQueryOptions<GetClientProjectData>): UseDataConnectQueryResult<GetClientProjectData, GetClientProjectVariables>;
export function useGetClientProject(dc: DataConnect, vars: GetClientProjectVariables, options?: useDataConnectQueryOptions<GetClientProjectData>): UseDataConnectQueryResult<GetClientProjectData, GetClientProjectVariables>;
