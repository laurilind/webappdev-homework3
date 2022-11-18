<template>
  <div>
    <div class="home">
      <ul class="post-list" id="post-list-id">
        <div class="post-element">
                <span id="post-header">
                    <img src="../assets/logo.png" class="post-header-img" width="48" height="48">
                    <p class="post-date" id="post-element-date">Oct 22, 2022</p>
                </span>
                <div class="post-image">
                    <img src="../assets/tartu.jpg" class="post-image">
                </div>
                <p>Post 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Necessitatibus ullam voluptates veniam, alias modi nulla nobis nisi quo reprehenderit cupiditate, 
                    veritatis tenetur voluptate corporis corrupti ipsa, accusantium minus porro quae.
                </p>
                <div class="post-footer">
                    <img src="../assets/thumbsup.png" width="32" height="32">
                </div>
            </div>



            <div class="post-element">
                <span id="post-header">
                    <img src="../assets/logo.png" width="48" height="48">
                    <p class="post-date" id="post-element-date">Oct 18, 2022</p>
                </span>

                <p>
                    Post 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Necessitatibus ullam voluptates veniam, alias modi nulla nobis nisi quo reprehenderit cupiditate, 
                    veritatis tenetur voluptate corporis corrupti ipsa, accusantium minus porro quae.
                </p>
                <div class="post-footer">
                    <img src="../assets/thumbsup.png" width="32" height="32">
                </div>
            </div>

            <div class="post-element">
                <span id="post-header">
                    <img src="../assets/logo.png" width="48" height="48">
                    <p class="post-date" id="post-element-date">Oct 18, 2022</p>
                </span>
                <p>Post 3 - Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                     explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                     consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
                     qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                     incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                     exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                     Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                     vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?.
                </p>
                <div class="post-footer">
                    <img src="../assets/thumbsup.png" width="32" height="32">
                </div>
            </div>

            <div class="post-element">
                <span id="post-header">
                    <img src="../assets/logo.png" width="48" height="48">
                    <p class="post-date" id="post-element-date">Oct 18, 2022</p>
                </span>
                <p>Post 4 - At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia 
                    deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                </p>
                <div class="post-footer">
                    <img src="../assets/thumbsup.png" width="32" height="32">
                </div>
            </div>

            <div class="post-element">
                <span id="post-header">
                    <img src="../assets/logo.png" width="48" height="48">
                    <p class="post-date" id="post-element-date">Oct 18, 2022</p>
                </span>
                <img src="../assets/logo.png" class="post-image" width="480" height="360">
                <p>
                    Post 5 - eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                </p>
                <div class="post-footer">
                    <img src="../assets/thumbsup.png" width="32" height="32">
                </div>
            </div>
        -->
          </ul>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
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

.dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    border-radius: 10px;
    background-color: #f1f1f1;
    min-width: 160px;
    min-height: 60px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown {
    position: relative;
    display: inline-block;
}


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