<template>
  <section class="base-chart">
    <table class="w-full">
      <thead class="text-sm text-blue-900 leading-normal">
        <tr>
          <th></th>
          <th>I AM A HEADER</th>
          <th>I AM A HEADER</th>
          <th>I AM A HEADER</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
        </tr>
        <tr>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
        </tr>
        <tr>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
        </tr>
        <tr>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
        </tr>
        <tr>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
        </tr>
        <tr>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
        </tr>
        <tr>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
          <td>I am a table row</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
export default {}
</script>
<style scoped lang="scss">
.base-chart {
  thead tr {
    background-color: #f0fbff;
  }
  thead tr,
  tbody tr {
    border-top: 1px solid;
    @apply border-blue-200;
  }
  th {
    @apply pl-2 pr-4 pt-2 pb-8 text-left;
  }
  tbody tr td {
    @apply pl-2 pr-4 py-5 text-left text-grey-700 leading-none;
  }
  tbody tr td:nth-child(odd) {
    background-color: #f7fafc;
  }
  thead tr th:nth-child(1),
  tbody tr td:nth-child(1) {
    border-right: 1px solid #fff;
  }
}
</style>
