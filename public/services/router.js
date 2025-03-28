export class Router {
    /**
     * @param {string} url 
     */
    static navigateTo(url) {
        window.history.pushState(null, null, url)

        renderContent(url)
    }
    
    /**
     * @param {string} url 
     */
    static renderContent(url) {
        const contentDiv = document.getElementById('content')
    
        switch (url) {
            case '/home':
                contentDiv.innerHTML = '<h1>Home Page</h1><p>Welcome to the home page!</p>';
                break;
            case '/about':
                contentDiv.innerHTML = '<h1>About Page</h1><p>This is the about page.</p><widget-card-component></widget-card-component>';
                break;
            case '/contact':
                contentDiv.innerHTML = '<h1>Contact Page</h1><p>Contact us at contact@example.com.</p>';
                break;
            default:
                contentDiv.innerHTML = '<h1>404 Not Found</h1>';
                break;
        }
    }
}