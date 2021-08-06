<template>
  <b-container>
    <b-row>
      <b-col cols="8" offset="2">
        <b-button @click="getMeds">BOOH</b-button>
        <b-button @click="getMeds">Criar user</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    async getMeds() {
      // this.$fire.auth.signInWithEmailAndPassword(
      //   "admin@admin.com",
      //   "Spaiamme08"
      // );
      this.$fire.auth.signOut()
      let messageRef = this.$fire.firestore.collection("meds");
      try {
        messageRef.get().then(response => {
          response.forEach(data => {
            console.log(data.id)
          })
        });
      } catch (e) {
        alert(e);
        return;
      }
    },
    async createUser() {
      await this.$fire.auth.createUserWithEmailAndPassword(
        "foo@foo.foo",
        "test"
      );
    },
  },
};
</script>
