//jshint esversion:6
import '../styles/styles.css';
import 'lazysizes';
import SmoothScroll from './modules/SmoothScroll';



if(module.hot){
    module.hot.accept();
}

new SmoothScroll();
/* contact modal */
//create empty modal var to inject modal upon click
// let modal;
// document.querySelector('.open-modal').addEventListener('click', (e) => {
// e.preventDefault();
// if(typeof modal === 'undefined'){

//     import( /* webpackChunkName: "modal" */ './modules/Modal').then(x => {
//         modal = new x.default();
//         setTimeout(() => modal.modalOpen(), 20);
//     }).catch(() => console.log('error'));
// }else{

// }
// });