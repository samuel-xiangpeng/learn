import "./index.css";
async function component() {
    const element = document.createElement('div');
    const lodash = await import("lodash");
    element.innerHTML = lodash.join(['Hello', 'webpack'], ' ');
    return element;
}

component().then(component => {
    document.body.appendChild(component);
})
