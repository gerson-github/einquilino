<template>
  <table class="min-w-full">
    <thead>
      <tr>
        <th>Contrato</th>
        <th>Cliente</th>
        <th>Valor</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="c in items" :key="c.id">
        <td>{{ c.number }}</td>
        <td>{{ c.client }}</td>
        <td>{{ c.amount }}</td>
        <td>{{ c.status }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  items: { type: Array, default: () => [] }
});
/* Em componentes reais: adicionar paginação, sort, selectable rows, slots para células personalizadas */
</script>
