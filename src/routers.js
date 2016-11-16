import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Duomai',
      component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
      path: '/advertiser',
      name: 'Advertiser',
      component: (resolve) => require(['./views/advertiser.vue'], resolve),
      children: [
        {
          path: '',
          name: 'Home',
          component: (resolve) => require(['./views/advertiser/home.vue'], resolve)
        },
        {
          path: 'advertisers',
          name: 'Advertisers',
          component: (resolve) => require(['./views/advertiser/advertisers.vue'], resolve),
          children: [
            {
              path: '',
              name: 'Campaigns',
              component: (resolve) => require(['./views/advertisers/campaigns.vue'], resolve)
            },
            {
              path: 'links',
              name: 'Links',
              component: (resolve) => require(['./views/advertisers/links.vue'], resolve)
            },
            {
              path: 'linksAdd',
              name: 'Links Add',
              component: (resolve) => require(['./views/advertisers/linksAdd.vue'], resolve)
            },
            {
              path: 'promotions',
              name: 'Promotions',
              component: (resolve) => require(['./views/advertisers/promotions.vue'], resolve)
            },
            {
              path: 'promotionsAdd',
              name: 'Promotions Add',
              component: (resolve) => require(['./views/advertisers/promotionsAdd.vue'], resolve)
            },
            {
              path: 'incentives',
              name: 'Incentives',
              component: (resolve) => require(['./views/advertisers/incentives.vue'], resolve)
            },
            {
              path: 'coupons',
              name: 'Coupons',
              component: (resolve) => require(['./views/advertisers/coupons.vue'], resolve)
            },
            {
              path: 'couponsAdd',
              name: 'Coupons Add',
              component: (resolve) => require(['./views/advertisers/couponsAdd.vue'], resolve)
            }
          ]
        },
        {
          path: 'reports',
          name: 'Reports',
          component: (resolve) => require(['./views/advertiser/reports.vue'], resolve),
          children: [
            {
              path: '',
              name: 'Performance Reports',
              component: (resolve) => require(['./views/reports/performance.vue'], resolve)
            },
            {
              path: 'transaction',
              name: 'Transaction Reports',
              component: (resolve) => require(['./views/reports/transaction.vue'], resolve)
            }
          ]
        },
        {
          path: 'account',
          name: 'Account',
          component: (resolve) => require(['./views/advertiser/account.vue'], resolve),
          children: [
            {
              path: '',
              name: 'Personal Information',
              component: (resolve) => require(['./views/account/info.vue'], resolve)
            },
            {
              path: 'infoEdit',
              name: 'Personal Information',
              component: (resolve) => require(['./views/account/infoEdit.vue'], resolve)
            },
            {
              path: 'password',
              name: 'Change Password',
              component: (resolve) => require(['./views/account/password.vue'], resolve)
            },
            {
              path: 'key',
              name: 'API Key',
              component: (resolve) => require(['./views/account/key.vue'], resolve)
            }
          ]
        },
        {
          path: 'balanceReport',
          name: 'Balance Report',
          component: (resolve) => require(['./views/advertiser/balanceReport.vue'], resolve),
          children: [
            {
              path: '',
              name: 'Balance Details',
              component: (resolve) => require(['./views/balanceReport/balanceDetails.vue'], resolve)
            },
            {
              path: 'transactions',
              name: 'Transactions',
              component: (resolve) => require(['./views/balanceReport/transactions.vue'], resolve)
            }
          ]
        },
        {
          path: 'API',
          name: 'API',
          component: (resolve) => require(['./views/advertiser/API.vue'], resolve)
        }
      ]
    },
    {
      path: '/test',
      name: '测试页面也很霸气',
      component: (resolve) => require(['./views/test.vue'], resolve),
      children: [
        {
          path: 'test1',
          name: '测试页面1',
          component: (resolve) => require(['./views/test/test1.vue'], resolve)
        },
        {
          path: 'test2',
          name: '测试页面2',
          component: (resolve) => require(['./views/test/test2.vue'], resolve)
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
