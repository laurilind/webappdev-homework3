<template>
  <div>
    <div class="home">
        <ul>
            <PostComponentVue class="post" :date="product.postDate" :msg="product.postText" :imgPath="product.postImage" v-for = "product in json" :key="product.id">
            
            </PostComponentVue>
        </ul>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import PostComponentVue from '@/components/PostComponent.vue';
export default {
  name: 'HomeView',
  components: {
    PostComponentVue
  },
  data: function() {
    const json = this.$store.getters.getPosts
    return {json};
  },
}

</script>
<style>

body {
    margin: 0;
}

head {
    align-self: center;
}

.show {display:block;}




.menuLinks:hover {
    background-color: rgb(54, 54, 54);
    color: aliceblue;
    padding: 5px;
    border-radius: 5px;
}
.header-div,
.sidebar,   
.post-element {
    background-color: #f99f38;
}

.header-div {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
}

.header-img {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
    margin-right: 0.5em;
}

.header-inline {
    display: inline-flex;
    justify-content: left;
    align-items: baseline;
    margin-left: 0.5em;
    margin-right: 0.5em;
}

.header-div a {
    font-size: 2em;
    font-weight: 600;
    color: black;
    margin-top: 0.2em;
    margin-bottom: 0.2em
}

.header-div a:link {
    text-decoration: none;
}

.header-div a:visited {
    text-decoration: none;
}

/* for desktop */
@media (min-width:1025px) {
    .body-div {
        display: flex;
        justify-content: space-between;
        align-content: center;
        height: max-content;
    }

    .sidebar {
        border-radius: 10px;
        text-align: center;
        min-width: 15%;
        margin: 10px 10px 10px 10px;
    }

    .post-element {
        min-height: 150px;
        min-width: 80%;
        /* max-width:fit-content; */
        text-align: left;
        margin: -5px 60px 40px 20px;
        border-radius: 10px;
        text-align: left;
        padding: 5px 10px 10px 10px;
    }

    .post-element .post-image {
        width: 100%;
        height: auto;
    }
    
    .header-div {
        margin-left: 10px;
        margin-right: 10px;
        margin: 5px 10px 10px 10px;
    }

}

/* for mobile */
@media only screen and (max-width: 768px) {
    .body-div {
        display: flex;
        justify-content: left;
        align-content: center;
        width: 100%;
        height: max-content;
        padding: 0px 0px 10px 0px;
        margin: 0px 0px 0px 0px;
    }

    .sidebar {
        width: 0%;
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
    }

    .post-list {
        margin: 0;
        padding: 0px 0px 0px 0px;
        width: 100%;
    }

    .post-element {
        min-height: 150px;
        max-width: 100%;
        text-align: left;
        border-radius: 10px;
        margin: 0 auto;
        padding: 0px 0px 0px 0px;
    }

    .post-element .post-image {
        width: 100%;
        padding: auto;
    }

    .post-element p {
        padding: 0px 5px 0px 5px;
    }
}

#post-header {
    display: flex;
    justify-content: space-between;
    margin: 10px 20px 20px 20px;
    font-size: 20px;
}

#post-header~p {
    font-size: 25px;
}

#post-header~post-content {
    font-size: 25px;
}

#post-header+img {
    display: flex;
}

p::first-letter {
    font-weight: 500;
    font-variant: small-caps;
}

footer {
    justify-content: center;
    text-align: center;
}
</style>