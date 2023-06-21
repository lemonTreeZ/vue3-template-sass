import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'products',
  component: RouterView,
  meta: {
    title: '项目'
  },
  children: [
    {
      path: 'product_list',
      name: 'product-list',
      component: () => import('@/views/products/list/index.vue'),
      meta: { // 自定义路由元数据
        title: '项目列表'
      }
    },
    {
      path: 'add_product',
      name: 'add-product',
      component: () => import('@/views/products/add/index.vue'),
      meta: {
        title: '添加项目'
      }
    },
    {
      path: 'product_classify',
      name: 'product-classify',
      component: () => import('@/views/products/classify/index.vue'),
      meta: {
        title: '项目分类'
      }
    },
    {
      path: 'product_reply',
      name: 'product-reply',
      component: () => import('@/views/products/reply/index.vue'),
      meta: {
        title: '项目评论'
      }
    }
  ]
}

export default routes
