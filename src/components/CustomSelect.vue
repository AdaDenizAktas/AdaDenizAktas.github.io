<!-- CustomSelect.vue -->
<template>
  <div ref="dropdownRef" class="relative w-full" @keydown.down.prevent="highlightNext" @keydown.up.prevent="highlightPrev" @keydown.enter.prevent="selectHighlighted" @keydown.esc="closeDropdown">
    <!-- Selected value -->
    <div
      class="input flex justify-between items-center cursor-pointer"
      @click="toggleDropdown"
      :class="{ 'ring-2 ring-blue-500': open }"
    >
      <span>{{ selectedLabel }}</span>
      <svg class="w-5 h-5 text-white ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>

    <!-- Options -->
    <ul
      v-show="open"
      class="absolute z-50 mt-1 w-full bg-black/40 backdrop-blur-sm border border-slate-700/40 rounded-lg max-h-60 overflow-auto text-white shadow-lg"
    >
      <li
        v-for="(option, idx) in options"
        :key="option.value"
        @click="selectOption(option)"
        @mouseenter="highlightIndex = idx"
        :class="[
          'exclude-3d cursor-pointer px-3 py-2 transition-colors duration-150',
          highlightIndex === idx ? 'bg-blue-500/40' : '',
        ]"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'


const props = defineProps({
  modelValue: [String, Number],
  options: {
    type: Array,
    required: true,
    // Each option: { value: any, label: string }
  }
})

const emit = defineEmits(['update:modelValue'])

const open = ref(false)
const highlightIndex = ref(-1)

const selectedLabel = computed(() => {
  const selected = props.options.find(o => o.value === props.modelValue)
  return selected ? selected.label : 'Select...'
})

function toggleDropdown() {
  open.value = !open.value
  if (open.value) highlightIndex.value = props.options.findIndex(o => o.value === props.modelValue)
}

function closeDropdown() {
  open.value = false
}

function selectOption(option) {
  emit('update:modelValue', option.value)
  open.value = false
}

function highlightNext() {
  if (!open.value) return toggleDropdown()
  highlightIndex.value = (highlightIndex.value + 1) % props.options.length
}

function highlightPrev() {
  if (!open.value) return toggleDropdown()
  highlightIndex.value = (highlightIndex.value - 1 + props.options.length) % props.options.length
}

function selectHighlighted() {
  if (highlightIndex.value >= 0) selectOption(props.options[highlightIndex.value])
}

const dropdownRef = ref(null)

function handleClickOutside(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>

<style scoped>
/* Optional scrollbar for dropdown */
ul::-webkit-scrollbar {
  width: 6px;
}
ul::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}
ul::-webkit-scrollbar-track {
  background: transparent;
}
</style>
