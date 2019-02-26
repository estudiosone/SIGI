import Vue from 'vue';
import Component from 'vue-class-component';
import firebase from 'firebase';

@Component
export class ModuloBase extends Vue {
    public mounted() {
        const currentUser = firebase.auth().currentUser;
        if (!currentUser) {
          this.$router.replace('/login');
        }
        document.title = this.$store.state.system.appName + ' | Home';
    }
}

export default ModuloBase;
