import RiverLevel from './RiverLevel/RiverLevel.vue'
import Aboutme from './Aboutme.vue'
import Memory from './Memory/memory.vue'
import Whatido from './Whatido.vue'
import Startpage from './Startpage'

export default [
    {path: '/', component: Startpage},
    {path: '/River', component: RiverLevel},
    {path: '/About', component: Aboutme},
    {path: '/Memory', component: Memory},
    {path: '/Whatido', component: Whatido}

]