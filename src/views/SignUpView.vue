<template>
  <div class="signup">
    <SignUpComponentVue/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpComponentVue from '@/components/SignUpComponent.vue';
export default {
  name: 'SignUpView',
  components: {
    SignUpComponentVue
  }
}
</script>
