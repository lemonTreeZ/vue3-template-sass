import { defineStore } from "pinia"
export const useAlertsStore = defineStore('userInfo', {
  state: () => {
    return {
			isCollapse: false
		}
  },
	actions: {
		chageCollapse() {
			this.isCollapse = !this.isCollapse
		}
	}
})
export default useAlertsStore