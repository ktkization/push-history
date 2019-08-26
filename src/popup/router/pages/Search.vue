<template>
  <div>
    <nav class="tabs is-full">
      <a @click="changeTab('recent')" v-bind:class="activeTab === 'recent' ? 'active' : ''">Recent</a>
      <a @click="changeTab('search')" v-bind:class="activeTab === 'search' ? 'active' : ''">Search</a>
    </nav>
    <div v-if="activeTab === 'recent'">
      <recent></recent>
    </div>
    <div v-else-if="activeTab === 'search'">
      <search></search>
    </div>
  </div>
</template>

<script>
import Search from '../../components/Search';
import Recent from '../../components/Recent';
export default {
  data() {
    return {
      activeTab: 'search',
      recentSearches: [],
      searchResults : []
    };
  },
  components: {
    Search,
    Recent
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    }
  }
};
</script>

<style scoped>
.tabs {
  cursor: pointer;
}
</style>