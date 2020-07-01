import Vue from 'vue';
export const unique = Vue.mixin({
  computed: {
    unique() {
      return function (arr, keyProps) {
        const kvArray = arr.map(entry => {
          const key = keyProps.map(k => entry[k]).join('|');
          return [key, entry];
        });
        const map = new Map(kvArray);
        return Array.from(map.values());
      }

      // function (arr, key) {
      //   var output = []
      //   var usedKeys = {}
      //   for (var i = 0; i < arr.length; i++) {
      //     if (!usedKeys[arr[i][key]]) {
      //       usedKeys[arr[i][key]] = true
      //       output.push(arr[i])
      //     }
      //   }
      //   return output
      // }
    }
  }
})