<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
    <!-- <AdminDashBoard /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import AdminDashBoard from './admin/index.vue'
// import EditorDashBoard from './editor/index.vue'

@Component({
  name: 'Dashboard',
  components: {
    AdminDashBoard,
    // EditorDashBoard
  }
})
export default class extends Vue {
  private currentRole = 'AdminDashBoard'

  get roles() {
    return UserModule.roles
  }

  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editor-dashboard'
    }
  }
}
</script>