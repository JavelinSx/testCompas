import { reactive } from 'vue';

interface FetchBus {
  isFetching: boolean;
  setFetchingState: (state: boolean) => void;
}

const fetchBus = reactive<FetchBus>({
  isFetching: false,
  setFetchingState(state: boolean) {
    this.isFetching = state;
  },
});

export default fetchBus;
