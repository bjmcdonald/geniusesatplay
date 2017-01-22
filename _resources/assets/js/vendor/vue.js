/**
 * Vue & Vue Resource
 * ------------------------------------------------------------------------------
 *
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 *
 * @link [Vue](https://vuejs.org/)
 * @link [Vue Resource](https://github.com/vuejs/vue-resource)
 */

window.Vue = require('vue');
require('vue-resource');

/**
 * Vue Instance
 * ------------------------------------------------------------------------------
 *
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 *
 */

// vue example component
Vue.component('example', require('./../components/Example.vue'));

// initialize Vue application instance
const app = new Vue({
    el: 'body'
});
