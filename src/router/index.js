import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Pages/Home/Home.vue'
import SignUp from '@/components/SignUp/SignUp.vue'
import Login from '@/components/Login/Login.vue'
import Dashboard from '@/components/Dashboard/Dashborad.vue'
import Expenses from '@/components/Dashboard/Expenses/Expenses.vue'
import Income from '@/components/Dashboard/Income/Income.vue'
import Withdraw from '@/components/Dashboard/Withdraw/Withdraw.vue'
import Deposit from '@/components/Dashboard/Deposit/Deposit.vue'
import PlanAndPrice from '@/components/Pages/PlanAndPricing/Plan.vue'
import CompanyInfo from '@/components/MyProfile/CompanyInfo/CompanyInfo.vue'
import Creditors from '@/components/MyProfile/Creditors/Creditors.vue'
import Debitors from '@/components/MyProfile/Debitors/Debitors.vue'
import AddMore from '@/components/MyProfile/AddMore/AddMore.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        authRequired: false
      }
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: {
        authRequired: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        authRequired: false
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        authRequired: true
      },
      children: [
        {
          path: 'expanses',
          name: 'Expenses',
          component: Expenses,
          meta: {
            authRequired: true
          }
        },
        {
          path: 'withdrawal',
          name: 'Withdrawal',
          component: Withdraw,
          meta: {
            authRequired: true
          }
        },
        {
          path: 'deposit',
          name: 'Deposit',
          component: Deposit,
          meta: {
            authRequired: true
          }
        },
        {
          path: 'income',
          name: 'Income',
          component: Income,
          meta: {
            authRequired: true
          }
        }
      ]
    },
    {
      path: '/setup-company',
      name: 'CompanyInfo',
      component: CompanyInfo,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/my-creditors',
      name: 'Creditors',
      component: Creditors,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/my-debitors',
      name: 'Debitors',
      component: Debitors,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/add-more',
      name: 'AddMore',
      component: AddMore,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/plan',
      name: 'Plan',
      component: PlanAndPrice
    }
  ],
  mode: 'history'
})
