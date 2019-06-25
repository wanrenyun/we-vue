<template>
  <div class="page">
    <w-group title="省市区选择示例">
      <w-cell title="默认" :value="area1" is-link @click="defaultPickerVisible = true"/>
      <w-cell title="两列" :value="area2" is-link @click="twoColumnPickerVisible = true"/>
    </w-group>

    <w-area-picker
      :visible.sync="defaultPickerVisible"
      :area-list="area"
      @confirm="handleConfirm"
      v-model="area1"
    />

    <w-area-picker
      :visible.sync="twoColumnPickerVisible"
      :area-list="area"
      value-key="name"
      columns-count="2"
      @confirm="handleConfirm"
      v-model="area2"
    />
  </div>
</template>

<script>
import areaList from '../assets/data/area'

export default {
  data () {
    return {
      defaultPickerVisible: false,
      twoColumnPickerVisible: false,
      area: areaList,
      area1: '110101',
      area2: '440300'
    }
  },

  methods: {
    handleConfirm () {
      console.log()
    }
  },

  filters: {
    pickerValueFilter (val) {
      if (Array.isArray(val)) {
        return val.toString()
      } else {
        return '请选择'
      }
    }
  }
}
</script>
