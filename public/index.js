import { NavigationMenuComponent } from "./components/navigation-menu-component.js"
import { WidgetCardComponent } from "./components/widget-card-component.js"

NavigationMenuComponent.load()
WidgetCardComponent.load()

function navigateTo(url) {
    window.history.pushState(null, null, url);
    renderContent(url);
}

function renderContent(url) {
    const contentDiv = document.getElementById('content');

    switch (url) {
        case '/home':
            contentDiv.innerHTML = '<h1>Home Page</h1><p>Welcome to the home page!</p>';
            break;
        case '/about':
            contentDiv.innerHTML = '<h1>About Page</h1><p>This is the about page.</p>';
            break;
        case '/contact':
            contentDiv.innerHTML = '<h1>Contact Page</h1><p>Contact us at contact@example.com.</p>';
            break;
        default:
            contentDiv.innerHTML = '<h1>404 Not Found</h1>';
            break;
    }
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        navigateTo(link.getAttribute('href'))
    })
})

window.addEventListener('popstate', () => {
    renderContent(window.location.pathname)
})

window.addEventListener('load', () => {
    renderContent(window.location.pathname || '/home')
})
