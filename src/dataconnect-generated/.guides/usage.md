# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateTag, useListProductIdeas, useCreateFeedback, useGetClientProject } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateTag(createTagVars);

const { data, isPending, isSuccess, isError, error } = useListProductIdeas();

const { data, isPending, isSuccess, isError, error } = useCreateFeedback(createFeedbackVars);

const { data, isPending, isSuccess, isError, error } = useGetClientProject(getClientProjectVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createTag, listProductIdeas, createFeedback, getClientProject } from '@dataconnect/generated';


// Operation CreateTag:  For variables, look at type CreateTagVars in ../index.d.ts
const { data } = await CreateTag(dataConnect, createTagVars);

// Operation ListProductIdeas: 
const { data } = await ListProductIdeas(dataConnect);

// Operation CreateFeedback:  For variables, look at type CreateFeedbackVars in ../index.d.ts
const { data } = await CreateFeedback(dataConnect, createFeedbackVars);

// Operation GetClientProject:  For variables, look at type GetClientProjectVars in ../index.d.ts
const { data } = await GetClientProject(dataConnect, getClientProjectVars);


```