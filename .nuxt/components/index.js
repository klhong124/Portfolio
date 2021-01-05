export { default as Job } from '../../components/Job.vue'

export const LazyJob = import('../../components/Job.vue' /* webpackChunkName: "components/Job" */).then(c => c.default || c)
