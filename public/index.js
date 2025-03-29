import { Router } from './services/router.js'
import { NavigationMenuComponent } from "./components/navigation-menu-component.js"
import { WidgetCardComponent } from "./components/widget-card-component.js"
import { AboutMeComponent } from './components/about-me-component.js'
import { DashboardComponent } from './components/dashboard-component.js'
import { DateTimeComponent } from './components/date-time-component.js'
import { TodoComponent } from './components/todo/todo-component.js'
import { DeleteButtonComponent } from './components/generic/delete-button-component.js'
import { TodoRowComponent } from './components/todo/todo-row-component.js'

DeleteButtonComponent.load()

NavigationMenuComponent.load()
WidgetCardComponent.load()
AboutMeComponent.load()
DashboardComponent.load()
DateTimeComponent.load()

TodoComponent.load()
TodoRowComponent.load()

const router = new Router({

    '/': DashboardComponent,
    
    '/about': AboutMeComponent,

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
