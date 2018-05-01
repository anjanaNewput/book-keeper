<template>
<transition name="modal">
  <div class="modal modal-mask" style="display: block">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
        </div>

        <div class="modal-body container-fluid">
           <slot name="body"></slot>
        </div>

        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name: 'ModalComponent'
}
</script>
<style>
.modal-mask {
  background-color: rgba(0, 0, 0, .2);
  display: table;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: opacity .3s ease;
  width: 100%;
  z-index: 9998;
}
</style>
