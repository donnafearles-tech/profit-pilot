# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListProductIdeas*](#listproductideas)
  - [*GetClientProject*](#getclientproject)
- [**Mutations**](#mutations)
  - [*CreateTag*](#createtag)
  - [*CreateFeedback*](#createfeedback)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListProductIdeas
You can execute the `ListProductIdeas` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listProductIdeas(): QueryPromise<ListProductIdeasData, undefined>;

interface ListProductIdeasRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProductIdeasData, undefined>;
}
export const listProductIdeasRef: ListProductIdeasRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProductIdeas(dc: DataConnect): QueryPromise<ListProductIdeasData, undefined>;

interface ListProductIdeasRef {
  ...
  (dc: DataConnect): QueryRef<ListProductIdeasData, undefined>;
}
export const listProductIdeasRef: ListProductIdeasRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProductIdeasRef:
```typescript
const name = listProductIdeasRef.operationName;
console.log(name);
```

### Variables
The `ListProductIdeas` query has no variables.
### Return Type
Recall that executing the `ListProductIdeas` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProductIdeasData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListProductIdeasData {
  productIdeas: ({
    id: UUIDString;
    title: string;
    shortDescription?: string | null;
  } & ProductIdea_Key)[];
}
```
### Using `ListProductIdeas`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProductIdeas } from '@dataconnect/generated';


// Call the `listProductIdeas()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProductIdeas();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProductIdeas(dataConnect);

console.log(data.productIdeas);

// Or, you can use the `Promise` API.
listProductIdeas().then((response) => {
  const data = response.data;
  console.log(data.productIdeas);
});
```

### Using `ListProductIdeas`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProductIdeasRef } from '@dataconnect/generated';


// Call the `listProductIdeasRef()` function to get a reference to the query.
const ref = listProductIdeasRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProductIdeasRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.productIdeas);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.productIdeas);
});
```

## GetClientProject
You can execute the `GetClientProject` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getClientProject(vars: GetClientProjectVariables): QueryPromise<GetClientProjectData, GetClientProjectVariables>;

interface GetClientProjectRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetClientProjectVariables): QueryRef<GetClientProjectData, GetClientProjectVariables>;
}
export const getClientProjectRef: GetClientProjectRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getClientProject(dc: DataConnect, vars: GetClientProjectVariables): QueryPromise<GetClientProjectData, GetClientProjectVariables>;

interface GetClientProjectRef {
  ...
  (dc: DataConnect, vars: GetClientProjectVariables): QueryRef<GetClientProjectData, GetClientProjectVariables>;
}
export const getClientProjectRef: GetClientProjectRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getClientProjectRef:
```typescript
const name = getClientProjectRef.operationName;
console.log(name);
```

### Variables
The `GetClientProject` query requires an argument of type `GetClientProjectVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetClientProjectVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetClientProject` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetClientProjectData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetClientProject`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getClientProject, GetClientProjectVariables } from '@dataconnect/generated';

// The `GetClientProject` query requires an argument of type `GetClientProjectVariables`:
const getClientProjectVars: GetClientProjectVariables = {
  id: ..., 
};

// Call the `getClientProject()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getClientProject(getClientProjectVars);
// Variables can be defined inline as well.
const { data } = await getClientProject({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getClientProject(dataConnect, getClientProjectVars);

console.log(data.clientProject);

// Or, you can use the `Promise` API.
getClientProject(getClientProjectVars).then((response) => {
  const data = response.data;
  console.log(data.clientProject);
});
```

### Using `GetClientProject`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getClientProjectRef, GetClientProjectVariables } from '@dataconnect/generated';

// The `GetClientProject` query requires an argument of type `GetClientProjectVariables`:
const getClientProjectVars: GetClientProjectVariables = {
  id: ..., 
};

// Call the `getClientProjectRef()` function to get a reference to the query.
const ref = getClientProjectRef(getClientProjectVars);
// Variables can be defined inline as well.
const ref = getClientProjectRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getClientProjectRef(dataConnect, getClientProjectVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.clientProject);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.clientProject);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateTag
You can execute the `CreateTag` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createTag(vars: CreateTagVariables): MutationPromise<CreateTagData, CreateTagVariables>;

interface CreateTagRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTagVariables): MutationRef<CreateTagData, CreateTagVariables>;
}
export const createTagRef: CreateTagRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createTag(dc: DataConnect, vars: CreateTagVariables): MutationPromise<CreateTagData, CreateTagVariables>;

interface CreateTagRef {
  ...
  (dc: DataConnect, vars: CreateTagVariables): MutationRef<CreateTagData, CreateTagVariables>;
}
export const createTagRef: CreateTagRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createTagRef:
```typescript
const name = createTagRef.operationName;
console.log(name);
```

### Variables
The `CreateTag` mutation requires an argument of type `CreateTagVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateTagVariables {
  name: string;
}
```
### Return Type
Recall that executing the `CreateTag` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateTagData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateTagData {
  tag_insert: Tag_Key;
}
```
### Using `CreateTag`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createTag, CreateTagVariables } from '@dataconnect/generated';

// The `CreateTag` mutation requires an argument of type `CreateTagVariables`:
const createTagVars: CreateTagVariables = {
  name: ..., 
};

// Call the `createTag()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createTag(createTagVars);
// Variables can be defined inline as well.
const { data } = await createTag({ name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createTag(dataConnect, createTagVars);

console.log(data.tag_insert);

// Or, you can use the `Promise` API.
createTag(createTagVars).then((response) => {
  const data = response.data;
  console.log(data.tag_insert);
});
```

### Using `CreateTag`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createTagRef, CreateTagVariables } from '@dataconnect/generated';

// The `CreateTag` mutation requires an argument of type `CreateTagVariables`:
const createTagVars: CreateTagVariables = {
  name: ..., 
};

// Call the `createTagRef()` function to get a reference to the mutation.
const ref = createTagRef(createTagVars);
// Variables can be defined inline as well.
const ref = createTagRef({ name: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createTagRef(dataConnect, createTagVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.tag_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.tag_insert);
});
```

## CreateFeedback
You can execute the `CreateFeedback` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createFeedback(vars: CreateFeedbackVariables): MutationPromise<CreateFeedbackData, CreateFeedbackVariables>;

interface CreateFeedbackRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateFeedbackVariables): MutationRef<CreateFeedbackData, CreateFeedbackVariables>;
}
export const createFeedbackRef: CreateFeedbackRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createFeedback(dc: DataConnect, vars: CreateFeedbackVariables): MutationPromise<CreateFeedbackData, CreateFeedbackVariables>;

interface CreateFeedbackRef {
  ...
  (dc: DataConnect, vars: CreateFeedbackVariables): MutationRef<CreateFeedbackData, CreateFeedbackVariables>;
}
export const createFeedbackRef: CreateFeedbackRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createFeedbackRef:
```typescript
const name = createFeedbackRef.operationName;
console.log(name);
```

### Variables
The `CreateFeedback` mutation requires an argument of type `CreateFeedbackVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateFeedbackVariables {
  productIdeaId: UUIDString;
  comment: string;
  type: string;
}
```
### Return Type
Recall that executing the `CreateFeedback` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateFeedbackData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateFeedbackData {
  feedback_insert: Feedback_Key;
}
```
### Using `CreateFeedback`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createFeedback, CreateFeedbackVariables } from '@dataconnect/generated';

// The `CreateFeedback` mutation requires an argument of type `CreateFeedbackVariables`:
const createFeedbackVars: CreateFeedbackVariables = {
  productIdeaId: ..., 
  comment: ..., 
  type: ..., 
};

// Call the `createFeedback()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createFeedback(createFeedbackVars);
// Variables can be defined inline as well.
const { data } = await createFeedback({ productIdeaId: ..., comment: ..., type: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createFeedback(dataConnect, createFeedbackVars);

console.log(data.feedback_insert);

// Or, you can use the `Promise` API.
createFeedback(createFeedbackVars).then((response) => {
  const data = response.data;
  console.log(data.feedback_insert);
});
```

### Using `CreateFeedback`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createFeedbackRef, CreateFeedbackVariables } from '@dataconnect/generated';

// The `CreateFeedback` mutation requires an argument of type `CreateFeedbackVariables`:
const createFeedbackVars: CreateFeedbackVariables = {
  productIdeaId: ..., 
  comment: ..., 
  type: ..., 
};

// Call the `createFeedbackRef()` function to get a reference to the mutation.
const ref = createFeedbackRef(createFeedbackVars);
// Variables can be defined inline as well.
const ref = createFeedbackRef({ productIdeaId: ..., comment: ..., type: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createFeedbackRef(dataConnect, createFeedbackVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.feedback_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.feedback_insert);
});
```

