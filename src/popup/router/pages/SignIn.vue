<template>
  <div>
    <button class="button primary" id="signin" @click="signin">Sign in with Pushbullet</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientId: '',
      authToken: null
    };
  },
  methods: {
    getAuthUrl() {
      const redirectUrl = chrome.identity.getRedirectURL('oauth2');
      return encodeURI(
        `https://www.pushbullet.com/authorize?client_id=${this.clientId}&redirect_uri=${redirectUrl}&response_type=token`
      );
    },
    async signin() {
      chrome.identity.launchWebAuthFlow(
        { url: this.getAuthUrl(), interactive: true },
        function(redirectUri) {
          if (redirectUri.includes('oauth2#access_token=')) {
            let token = redirectUri.split('oauth2#access_token=')[1];
            chrome.storage.local.set({ authToken: token });
          }
        }
      );
    },
    getAuthToken() {
      return new Promise(function(resolve, reject) {
        $storage.get('authToken', function(result) {
          if (result.key) {
            resolve(token);
          } else {
            reject(chrome.runtime.lastError);
          }
        });
      });
    }
  }
};
</script>

<style scoped>
#signin {
  margin: 20px 20px;
}
</style>
