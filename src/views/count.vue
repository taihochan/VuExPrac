<template>
  <div class="container">
    <h2>
      count :
      <span class="count">{{ count }}</span>
    </h2>Set Number:
    <input type="number" v-model="num" />
    <br />
    <button @click="actionIncrease(Number(num))">+</button>
    <button @click="actionDecrease(Number(num))">-</button>
    <button @click="actionMultiply(Number(num))">*</button>
    <button @click="actionDivided(Number(num))">/</button>
    <button @click="actionCountReset">歸零</button>
  </div>
</template>

<script>
// 引用 vuex
// mapActions 在 computed 中使用，提取 action 函式的方法，使用函式名稱
// mapGetters 在 methods 中使用，提取 getter 函式的方法，可以利用物件 key: value 方式取別名
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      num: 1,
    };
  },
  computed: {
    // ...mapGetters 為 ES7 寫法
    ...mapGetters({
      // getCount return value 將會存在別名為 count 的 data 上
      count: "getCount",
    }),
  },
  methods: {
    ...mapActions([
      "actionIncrease",
      "actionDecrease",
      "actionDivided",
      "actionMultiply",
      "actionCountReset",
    ]),
    // 其他 method call action 的方法
    callAction() {
      // example
      this.actionIncrease;
    },
  },
};
</script>