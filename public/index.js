import { Router } from './services/router.js'
import { NavigationMenuComponent } from "./components/navigation-menu-component.js"
import { WidgetCardComponent } from "./components/widget-card-component.js"
import { AboutMeComponent } from './components/about-me-component.js'
import { DashboardComponent } from './components/dashboard-component.js'
import { DateTimeComponent } from './components/date-time-component.js'

NavigationMenuComponent.load()
WidgetCardComponent.load()
AboutMeComponent.load()
DashboardComponent.load()
DateTimeComponent.load()

const router = new Router({
    '/about': AboutMeComponent,
    '/dashboard': DashboardComponent,
})

document.querySelectorAll('[href]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        router.navigateTo(link.getAttribute('href'))
    })
})

window.addEventListener('popstate', () => {
    router.renderContent(window.location.pathname)
})

window.addEventListener('load', () => {
    router.renderContent(window.location.pathname || '/home')
})
