<script>
import {MDCRipple} from '@material/ripple';

export default {
  name: 'login',
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    onSubmit: function(event) {
      alert(this.email);
    }
  },
}
</script>

<style lang="scss" scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");

#login {
  position: absolute;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: grid;
  justify-items: center;
  align-content: center;
}
#login-form-logo {
  width: 96px;
  margin: 32px auto 16px auto;
}
</style>

<template>
  <div id="login">
    <div id="login-card" class="card" style="width: 360px;">
      <img id="login-form-logo" src="../assets/logo.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Iniciar sesión en</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ this.$store.state.empresa.nombre }}</h6>
        <br>
        <form v-on:submit.prevent="onSubmit">
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input v-model="email" type="email" class="form-control" placeholder="Email" required>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Contraseña</label>
            <input v-model="password" type="password" class="form-control" placeholder="Contraseña">
          </div>
          <div class="form-grup text-right">
            <button type="submit" class="btn btn-primary">Iniciar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


