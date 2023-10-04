<!-- <template>
  <AppModal v-model="dialog">
    <h2>Select an Option</h2>
    <select v-model="selectedOption">
      <option selected hidden value="">Choose your role</option>
      <option v-for="(items, index) in role" :key="index" :value="items">
        {{ items }}
      </option>
    </select>
    <button @click="confirm">Confirm</button>
  </AppModal>
</template>

<script setup>
import AppModal from "../ui/app-modal.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

import http from "../plugins/api";

const router = useRouter();

const selectedOption = ref("");
const dialog = ref(false);
const role = ref("");

const confirm = () => {
  console.log(selectedOption);

  http
    .post("/admins/set-role", {
      role: selectedOption.value,
    })
    .then((res) => {
      console.log(selectedOption.value);
      router.push({ name: selectedOption.value });
    })
    .catch((err) => {
      console.log(err);
    });
};

const openModal = (roles) => {
  dialog.value = true;
  role.value = roles;
};
const openDialog = () => {
  console.log(dialog);
};

defineExpose({ openModal, openDialog });
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
}

select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style> -->
