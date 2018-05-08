import Vue from 'vue'
import Router from 'vue-router'
import VueBreadcrumbs from 'vue-breadcrumbs'

import Home from '@/components/Pages/Home/Home.vue'
import SignUp from '@/components/SignUp/SignUp.vue'
import Login from '@/components/Login/Login.vue'
import Dashboard from '@/components/Dashboard/Dashborad.vue'
import Expenses from '@/components/Dashboard/Expenses/Expenses.vue'
import Income from '@/components/Dashboard/Income/Income.vue'
import Withdraw from '@/components/Dashboard/Withdraw/Withdraw.vue'
import Deposit from '@/components/Dashboard/Deposit/Deposit.vue'
import PlanAndPrice from '@/components/Pages/PlanAndFeatures/Plan.vue'
import CompanyInfo from '@/components/MyProfile/CompanyInfo/CompanyInfo.vue'
import Creditors from '@/components/MyProfile/Creditors/Creditors.vue'
import Debitors from '@/components/MyProfile/Debitors/Debitors.vue'
import AddMore from '@/components/MyProfile/AddMore/AddMore.vue'
import SaleEntry from '@/components/Dashboard/SaleEntry/SaleEntry.vue'
import PurchaseEntry from '@/components/Dashboard/PurchaseEntry/PurchaseEntry.vue'
import Reports from '@/components/Reports/Reports.vue'
import ProfitAndLoss from '@/components/Reports/P&L/ProfitAndLoss.vue'
import BalanceSheet from '@/components/Reports/BalanceSheet/BalanceSheet.vue'
import LedgerAccount from '@/components/Reports/Account/Account.vue'
import TimeInterval from '@/components/Reports/TimeInterval/TimeInterval.vue'

Vue.use(Router)
Vue.use(VueBreadcrumbs)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        authRequired: false,
        breadcrumb: 'Home '
      }
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
      meta: {
        authRequired: false,
        breadcrumb: 'SignUp '
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        authRequired: false,
        breadcrumb: 'Login '
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        authRequired: true,
        breadcrumb: 'Dashboard  '
      },
      children: [
        {
          path: 'expanses',
          name: 'Expenses',
          component: Expenses,
          meta: {
            authRequired: true,
            breadcrumb: '/ Expenses '
          }
        },
        {
          path: 'cash-withdrawal',
          name: 'Withdrawal',
          component: Withdraw,
          meta: {
            authRequired: true,
            breadcrumb: '/ Withdrawal '
          }
        },
        {
          path: 'cash-deposit',
          name: 'Deposit',
          component: Deposit,
          meta: {
            authRequired: true,
            breadcrumb: '/ Deposit '
          }
        },
        {
          path: 'income',
          name: 'Income',
          component: Income,
          meta: {
            authRequired: true,
            breadcrumb: '/ Income '
          }
        },
        {
          path: 'sale',
          name: 'Sale',
          component: SaleEntry,
          meta: {
            authRequired: true,
            breadcrumb: '/ Sales '
          }
        },
        {
          path: 'purchase',
          name: 'Purchase',
          component: PurchaseEntry,
          meta: {
            authRequired: true,
            breadcrumb: '/ Purchase '
          }
        }
      ]
    },
    {
      path: '/setup-company',
      name: 'CompanyInfo',
      component: CompanyInfo,
      meta: {
        authRequired: true,
        breadcrumb: 'CompanyInfo '
      }
    },
    {
      path: '/my-creditors',
      name: 'Creditors',
      component: Creditors,
      meta: {
        authRequired: true,
        breadcrumb: 'Creditors '
      }
    },
    {
      path: '/my-debitors',
      name: 'Debitors',
      component: Debitors,
      meta: {
        authRequired: true,
        breadcrumb: 'Debitors '
      }
    },
    {
      path: '/add-more/:type',
      name: 'AddMore',
      component: AddMore,
      meta: {
        authRequired: true,
        breadcrumb: 'AddMore '
      }
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports,
      meta: {
        authRequired: true,
        breadcrumb: 'Reports '
      }
    },
    {
      path: '/profit-and-loss',
      name: 'ProfitAndLoss',
      component: ProfitAndLoss,
      meta: {
        authRequired: true,
        breadcrumb: 'ProfitAndLoss '
      }
    },
    {
      path: '/balance-sheet',
      name: 'BalanceSheet',
      component: BalanceSheet,
      meta: {
        authRequired: true,
        breadcrumb: 'BalanceSheet '
      }
    },
    {
      path: '/ledger-account',
      name: 'LedgerAccount',
      component: LedgerAccount,
      meta: {
        authRequired: true,
        breadcrumb: 'LedgerAccount '
      }
    },
    {
      path: '/plan',
      name: 'Plan',
      component: PlanAndPrice,
      meta: {
        breadcrumb: 'PlanAndPrice '
      }
    },
    {
      path: '/time-interval',
      name: 'TimeInterval',
      component: TimeInterval,
      meta: {
        authRequired: true,
        breadcrumb: 'TimeInterval '
      }
    }
  ],
  mode: 'history'
})
