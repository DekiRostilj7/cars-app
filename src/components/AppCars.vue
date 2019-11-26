<template>
    <div>
        <div>
            <ol>
                <li v-for= "(car, index) in cars" :key="index">
                        {{ car }}
                </li>
            </ol>
        </div>
    </div>
</template>
<script>
import {carsService} from '../services/CarsService'
export default {
    data(){
    return {
      cars: []
    }
  },

    created(){
          carsService.getAllCars()
          .then(response => {
              console.log(response);
              this.cars = response.data;
          })
      }
  }
      

</script>