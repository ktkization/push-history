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
  mounted() {
    if(this.isAuthenticated()) {
      this.$router.push('search');
    }
  },
  methods: {
    getAuthUrl() {
      const redirectUrl = chrome.identity.getRedirectURL('oauth2');
      return encodeURI(
        `https://www.pushbullet.com/authorize?client_id=${this.clientId}&redirect_uri=${redirectUrl}&response_type=token`
      );
    },
    signin() {
      chrome.identity.launchWebAuthFlow(
        { url: this.getAuthUrl(), interactive: true },
        function(redirectUri) {
          if (redirectUri.includes('oauth2#access_token=')) {
            let token = redirectUri.split('oauth2#access_token=')[1];
            this.authToken = token;
            chrome.storage.local.set({ authToken: token });
          }
        }
      );
    },
    getAuthToken() {
      return new Promise(function(resolve, reject) {
        chrome.storage.local.get(['authToken'], function(result) {
          console.log(`Token: ${result['authToken']}`)
          result['authToken'] ? resolve(result['authToken']) : resolve(null);
        });
      });
    },
    async isAuthenticated() {
      let tokenExists = false;
      if (this.authToken) {
        tokenExists = true;
      } else {
        (await this.getAuthToken())
          ? (tokenExists = true)
          : (tokenExists = false);
      }
      return tokenExists
    }
  }
};
</script>

<style scoped>
#signin {
  margin: 20px 20px;
}
</style>
