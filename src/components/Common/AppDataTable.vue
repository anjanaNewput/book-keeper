<template>
<vue-good-table ref="vueTable"
  :columns="columns"
  :rows="rowContent"
  :pagination-options="{
    enabled: true,
    perPage: 5,
  }"
  styleClass="vgt-table bordered">
  <template slot="table-row" slot-scope="props">
    <span v-if="props.column.field === 'action'">
      <i class="fa fa-edit" @click="editRow"></i>
      <i class="fa fa-trash" @click="deleteRow"></i>
    </span>
    <span v-else>
      {{props.formattedRow[props.column.field]}}
    </span>
  </template>
</vue-good-table>
</template>

<script>
export default {
  name: 'AppDataTable',
  props: [
    'rowContent', 'columns'
  ],
  data () {
    return {

    }
  },
  methods: {
    editRow () {
      alert('Clicked edit')
    },
    deleteRow () {
      alert('Clicked delete')
    }
  }
}
</script>
<style lang='scss'>
.vgt-wrap {
  box-sizing: border-box;
  margin-top: 35px;
  background-color: #fff;
  .vgt-responsive {
    .vgt-table {
      .custom-th-class, .custom-td-class {
        text-align: center;
        i {
          cursor: pointer;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
