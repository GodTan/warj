/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  name: '事件审核',
  meta: {
    title: '事件审核',
    icon: 'table'
  },
  children: [
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table'),
      name: 'ComplexTable',
      meta: { title: 'createArticle' }
    }, {
      path: 'event-audit',
      component: () => import('@/views/table/event-audit'),
      name: 'EventAudit',
      meta: { title: 'eventAudit' }
    }
  ]
}
export default tableRouter
