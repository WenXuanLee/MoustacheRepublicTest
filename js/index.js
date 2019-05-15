/* main function 
 * control select button css
 * validate submit
 * ensure item selected
 * add to minicart and update the num in cart
*/

new Vue ({
    el: '#app',
    data: {
      cartTotalCount: 4,
      selectedSize: '',
      isSelected: false,
      isShowMiniCart: false,
      isError: false,
      sizeOptions: {
        S: false,
        M: false,
        L: false
      }
    },
    computed: {
    },
    methods: {
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
          this.isError = false
        } else {
          this.isError = true
        }
      }
    },
  })