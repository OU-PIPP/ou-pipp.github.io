<template>
    <div class="docs-demo-mode-toggle">
        <button :class="{ selected: lang === 'en-US' }" title="English" @click="updateLang('en-US')">EN</button>
        <button :class="{ selected: lang === 'de-DE' }" title="German" @click="updateLang('de-DE')">DE</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'LanguageSwitcher',
  components: {
  },
  setup() {
    const { locale } = useI18n();
    const lang = ref(locale.value);

    const updateLang = (l: string) => {
      lang.value = l;
      if (locale.value !== l) {
        locale.value = l;
      }
    }

    return {
      lang,
      updateLang,
    }
  }
});
</script>

<style scoped>
.docs-demo-mode-toggle {
    align-items: center;
    background: #ecf0f5;
    border-radius: 18px;
    display: flex;
    height: 28px;
    justify-content: center;
    width: 128px;
}

.docs-demo-mode-toggle button {
    background-color: transparent;
    border: none;
    border-radius: 16px;
    color: #5b708b;
    cursor: pointer;
    font-family: var(--font-family);
    font-size: 11px;
    letter-spacing: -.02em;
    line-height: 21px;
    padding-top: 2px;
    transition: background-color .2s,color .2s;
    width: calc(50% - 2px);
}

.docs-demo-mode-toggle button.selected {
    background-color: #fff;
    box-shadow: 0 2px 3px rgb(0 16 46 / 15%);
    color: #000;
    font-weight: 600;
}
</style>
