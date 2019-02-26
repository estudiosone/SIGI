export const SetIcons = (Vue: any) => {
    Vue.component(
        'icon-bar',
        () => import(/* webpackChunkName: "component-icon-bar" */ './icons/Bar.vue'),
    );
    Vue.component(
        'icon-business',
        () => import(/* webpackChunkName: "component-icon-business" */ './icons/Business.vue'),
    );
    Vue.component(
        'icon-hotel',
        () => import(/* webpackChunkName: "component-icon-hotel" */ './icons/Hotel.vue'),
    );
    Vue.component(
        'icon-inventory',
        () => import(/* webpackChunkName: "component-icon-inventory" */ './icons/Inventory.vue'),
    );
    Vue.component(
        'icon-purchase',
        () => import(/* webpackChunkName: "component-icon-purchase" */ './icons/Purchase.vue'),
    );
    Vue.component(
        'icon-pos',
        () => import(/* webpackChunkName: "component-icon-pos" */ './icons/POS.vue'),
    );
    Vue.component(
        'icon-restaurant',
        () => import(/* webpackChunkName: "component-icon-restaurant" */ './icons/Restaurant.vue'),
    );
    Vue.component(
        'icon-sale',
        () => import(/* webpackChunkName: "component-icon-sale" */ './icons/Sale.vue'),
    );
};

export default {
    SetIcons,
};
