<template src="./account.html"></template>
<script src="./account.js"></script>
<style lang="scss" scoped>
.ledger-acc {
  width: 80%;
  margin: 40px auto;
  padding: 30px 50px;
  background-color: #fff;
}
.wrapper {
  text-align: left;
  .display-interval {
    label, span {
      font-size: 16px;
    }
  }
  .table {
    margin-bottom: 0px;
  }
}
@media screen and (max-width: '768px') {
  .ledger-acc {
    width: 100%;
  }
}
</style>
