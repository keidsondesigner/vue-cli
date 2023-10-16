<template>
  <div>
    <div v-if="loading">
      <p>Aguarde carregando...</p>
    </div>
    <div v-else>
      <p>{{ simbolo }}</p>
      <div>{{ acao }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['simbolo'],
  data() {
    return {
      loading: true,
      acao: null,
    };
  },
  methods: {
    puxarAcao(simbolo) {
      this.loading = true;
      this.acao = null;

      fetch(`https://api.iex.cloud/v1/data/CORE/QUOTE/${simbolo}?token=pk_b066253362b549bca82a8a0ecb4028e5`)
        .then((response) => response.json())
        .then((response) => {
          this.acao = response;
          this.loading = false;
        });
    },
  },
  created() {
    this.puxarAcao(this.simbolo);
  },
  beforeRouteUpdate(to, from, next) {
    this.puxarAcao(to.params.simbolo);
    next();
  },
};
</script>

<style></style>
