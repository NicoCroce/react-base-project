import { update, get, set } from 'idb-keyval';
import { uuid } from './uuid';
import { queryClient } from '@/main';
import { API } from '@/Services/API';

export const persistMutation = async ({ method, path, body, restOptions }) => {
  const newMutation = {
    id: uuid(),
    method,
    path,
    body,
    restOptions
  };

  try {
    let state;
    // Store new mutation preserving prevState.
    await update('mutations', (prevState) => {
      state = [...(prevState || []), newMutation];
      return state;
    });
    // Update react-query state and update ui.
    queryClient.setQueryData(['mutationWaiting'], state);
  } catch (err) {
    throw new Error('can`t add new mutation');
  }
};

// This function preserv rejected executions, in react-query state and indexdb.
const persistStoreRejected = async (store) => {
  try {
    queryClient.setQueryData(['mutationWaiting'], store);
    await set('mutations', store);
  } catch (err) {
    throw new Error('cant add new mutation');
  }
};

export const syncMutationsWithServer = async (invalidateQueries) => {
  const allMutations = await get('mutations');

  /**
   * Generate an array with all fetches to will be executed
   */
  const allMutationsPromises = allMutations.map(
    ({ method, path, body, restOptions, id }) => {
      return API[method](path, { body, idPersisted: id, ...restOptions });
    }
  );

  // Execute all promises.
  const result = await Promise.allSettled(allMutationsPromises);

  // Filter by status reject. It's very important, because we need them to sync wien server again and don't loose information.
  // reason, return the id of the rejected mutation.
  const rejected = result
    .filter((mutation) => mutation.status === 'rejected')
    .map((mutationRejected) => mutationRejected.reason);

  // Filter between all mutations, comparing all ids rejected.
  const store = allMutations.filter((mutation) =>
    rejected.includes(mutation.id)
  );

  // This function preserv rejected executions, in react-query state and indexdb.
  persistStoreRejected(store);

  // Invalidate query, for update react-query state.
  queryClient.invalidateQueries({ queryKey: invalidateQueries });
};
