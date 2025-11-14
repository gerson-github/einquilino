import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    dashboard: 'Dashboard',
    properties: 'Property Registration',
    landlords: 'Landlords',
    tenants: 'Tenants',
    contracts: 'Contracts',
    payments: 'Payments',
    notifications: 'Notifications',
    reports: 'Reports',
    appName: 'Contract Manager',
    appSubtitle: 'Rental SaaS'
  },
  pt: {
    dashboard: 'Painel',
    properties: 'Cadastro de Imóveis',
    landlords: 'Locadores',
    tenants: 'Locatários',
    contracts: 'Contratos',
    payments: 'Pagamentos',
    notifications: 'Notificações',
    reports: 'Relatórios',
    appName: 'Gerenciador de Contratos',
    appSubtitle: 'SaaS de Aluguel'
  }
}

export default createI18n({
  locale: 'pt', // default language
  fallbackLocale: 'en',
  messages
})
