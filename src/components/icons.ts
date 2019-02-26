export const SetIcons = (Vue: any) => {
    Vue.component(
        'icon-business',
        () => import(/* webpackChunkName: "component-icon-business" */ './icons/Business.vue'),
    );
    Vue.component(
        'icon-purchase',
        () => import(/* webpackChunkName: "component-icon-purchase" */ './icons/Purchase.vue'),
    );
    Vue.component(
        'icon-sale',
        () => import(/* webpackChunkName: "component-icon-sale" */ './icons/Sale.vue'),
    );
};

export default {
    SetIcons,
};
