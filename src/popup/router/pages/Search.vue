<template>
  <div>
    <nav class="tabs is-full">
      <a @click="changeTab('recent')" v-bind:class="activeTab === 'recent' ? 'active' : ''">Recent</a>
      <a @click="changeTab('search')" v-bind:class="activeTab === 'search' ? 'active' : ''">Search</a>
    </nav>
    <div v-if="activeTab === 'recent'">
      <recent-tab></recent-tab>
    </div>
    <div v-else-if="activeTab === 'search'">
      <search-tab></search-tab>
    </div>
  </div>
</template>

<script>
import SearchTab from '../../components/SearchTab';
import RecentTab from '../../components/RecentTab';
export default {
  data() {
    return {
      activeTab: 'search',
      recentSearches: [],
      searchResults : []
    };
  },
  components: {
    SearchTab,
    RecentTab
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