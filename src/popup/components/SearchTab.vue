<template>
  <div>
    <div class="row">
        <div class="col-10">
            <input type="text" name="search" id="search">
        </div>
        <div class="col-2">
            <button class="button icon-only">
                <v-icon name="search" scale="1"/>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/search'

export default {
    data(){
        return {
            
        }
    },
    components: {
        'v-icon': Icon
    }
};
</script>

<style scoped>
#search{
    width: 50px;
}
</style>