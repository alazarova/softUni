<template>
 <div class="site">
<input type="checkbox" id="nav-main-toggle" name="nav-main-toggle">
   <header class="site-header">
     <div class="site-branding">
       <p class="site-title">
         Theme - Lazy
       </p>
       <p class="site-description">
          This is a very minimalistic and beautiful theme for Lazy.
       </p>
     </div>
     <label id="nav-toggle-left" for="nav-main-toggle" class="fas nav-toggle left"><span>Menu</span></label>
    <label id="nav-toggle-right" for="nav-main-toggle" class="fas nav-toggle right"><span>Menu</span></label>

     <nav class="navigation main">
       <ul>
         <li><a class="fas fa-newspaper" href="/">Home</a></li>
         <li><a class="fas fa-user-tie" href="/about">About</a></li>
         <li><a class="fas fa-envelope" href="/contacts">Contacts</a></li>
       </ul>
     </nav>
   </header>

   <main class="site-content">
            <h2><i class="fas fa-mail-bulk"></i>index.html</h2>
       <h1>Title Lavel 1</h1>
       <h2>Title Lavel 2</h2>
       <h3>Title Lavel 3</h3>
       <h4>Title Lavel 4</h4>
       <h5>Title Lavel 5</h5>
       <h6>Title Lavel 6</h6>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   </main>

<footer class="site-footer">

</footer>
</div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
