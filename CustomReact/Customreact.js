
function customRender(rE, mC) {
 /*   const domElement = document.createElement(rE.type);
    domElement.textContent = rE.children;
    domElement.setAttribute('href', rE.props.href);
    domElement.setAttribute('target', rE.props.target);
    mC.appendChild(domElement);
*/
const domElement = document.createElement(rE.type);
domElement.textContent = rE.children;
for(const prop in rE.props){
    if(prop=='children')
        continue;
    domElement.setAttribute(prop,rE.props[prop])
}
mC.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('.root'); // Using class selector

customRender(reactElement, mainContainer);

