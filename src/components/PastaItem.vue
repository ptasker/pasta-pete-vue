<template>
    <li class="pasta-dish list-unstyled">
        <div class="row">
            <div class="col-md-3">
                <img :src="this.item.image" :alt="this.item.name" />
            </div>
            <div class="col-md-9 text-left">
                <h3>{{this.item.name}}</h3>
                <p>
                    {{this.item.desc}}
                </p>
                <button v-on:click="addToOrderNew" class="btn btn-primary">Add to order</button> <mark>{{this.orders}}</mark>
            </div>
        </div>
    </li>
</template>

<script>

export default {
    name: 'pasta-item',
    props: ['item'],
    data:  function(){
        return{
            orders: 0
        }
    },
    methods: {
        addToOrderNew: function(y){
            this.orders += 1;
            this.$emit('order');
        }
    }
}

</script>

<style src="./Pasta.css"></style>