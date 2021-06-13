<script>
import Login from "@/components/Login";
import Register from "@/components/Register";
import Admin from "@/components/Admin";
import GoodsList from "@/components/GoodsList";
const NotFound = { template: '<p>Page not found</p>' }
const routes={
  '/':Login,
  '/login':Login,
  '/register':Register,
  '/admin':Admin,
  '/goods':GoodsList
}

export default {
  name:'Router',
  data:function () {
    return {
      currentRoute:window.location.pathname
    }
  },
  computed:{
    ViewComponent(){
      return routes[this.currentRoute]||NotFound
    }
  },
  render(h){return h(this.ViewComponent)}
}
</script>