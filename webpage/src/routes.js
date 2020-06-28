import RiverLevel from './RiverLevel/RiverLevel.vue'
import Aboutme from './Aboutme.vue'
import Memory from './Memory/Memory.vue'
import Whatido from './Whatido.vue'
import Startpage from './Startpage.vue'
import Impressum from './Impressum.vue'
import intern from './intern/intern.vue'

export default [
    {path: '/', component: Startpage},
    {path: '/River', component: RiverLevel},
    {path: '/About', component: Aboutme},
    {path: '/Memory', component: Memory},
    {path: '/Whatido', component: Whatido},
    {path: '/Impressum', component: Impressum},
    {path: '/intern', component: intern},

]