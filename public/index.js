import { Router } from './services/router.js'
import { NavigationMenuComponent } from "./components/navigation-menu-component.js"
import { WidgetCardComponent } from "./components/widget-card-component.js"

NavigationMenuComponent.load()
WidgetCardComponent.load()

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        Router.navigateTo(link.getAttribute('href'))
    })
})

window.addEventListener('popstate', () => {
    Router.renderContent(window.location.pathname)
})

window.addEventListener('load', () => {
    Router.renderContent(window.location.pathname || '/home')
})
