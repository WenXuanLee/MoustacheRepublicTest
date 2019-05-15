/* main function 
 * control select button css
 * validate submit
 * ensure item selected
 * add to minicart and update the num in cart
*/

new Vue ({
    el: '#app',
    data: {
      selectedSize: '',
      isSelected: false,
      isShowMiniCart: false,
      isError: false,
      sizeOptions: {
        S: false,
        M: false,
        L: false
      },
      miniCart: {
        S: 1,
        M: 3,
        L: 0
      }
    },
    computed: {
      /* filter out num < 0 */
      filterCart() {
        let storeObj = {}
        Object.keys(this.miniCart).filter(item => { return this.miniCart[item] > 0 }).forEach(key => {
          storeObj[key] = this.miniCart[key]
        })
  
        return storeObj
      },
      cartTotalCount() {
        let total = 0
        Object.keys(this.miniCart).forEach(item => {
          total = total + this.miniCart[item] 
        })
        return total
      }
    },
    methods: {
      showMiniCart() {
        this.isShowMiniCart = !this.isShowMiniCart
      },
      selectSize(input) {
        /* in case v-for render empty button */
        if(this.selectedSize) this.sizeOptions[this.selectedSize] = false
        if(input !== this.selectedSize ) {
          this.isSelected = true
          this.sizeOptions[input] = true   
          this.selectedSize = input  
        } else {
          this.isSelected = false
          this.sizeOptions[input] = false 
          this.selectedSize = ''
        }
      },
      checkAddToCart() {
        if(this.isSelected && this.selectedSize) {
          this.miniCart[this.selectedSize] = this.miniCart[this.selectedSize] + 1
          this.isError = false
          this.isShowMiniCart = true
        } else {
          this.isError = true
        }
      }
    },
  })