import { defineClientConfig } from '@vuepress/client'
import './styles/index.scss'

import AllPages from '../components/AllPages.vue'
import AnnoAttachment from '../components/AnnoAttachment.vue'
import AnnoForms from '../components/AnnoForms.vue'
import AnnoLinks from '../components/AnnoLinks.vue'
import AnnotationFilter from '../components/AnnotationFilter.vue'
import AnnotationLayer from '../components/AnnotationLayer.vue'
import FitParent from '../components/FitParent.vue'
import Loaded from '../components/Loaded.vue'
import MultiplePDF from '../components/MultiplePDF.vue'
import OnePage from '../components/OnePage.vue'
import Rotation from '../components/Rotation.vue'
import Scale from '../components/Scale.vue'
import TextLayer from '../components/TextLayer.vue'
import XFALayer from '../components/XFALayer.vue'
import Watermark from '../components/Watermark.vue'


export default defineClientConfig({
    enhance({app}) {
        app.component('OnePage', OnePage)
        app.component('Watermark', Watermark)
        app.component('AllPages', AllPages)
        app.component('Scale', Scale)
        app.component('Rotation', Rotation)
        app.component('TextLayer', TextLayer)
        app.component('AnnotationLayer', AnnotationLayer)
        app.component('XFALayer', XFALayer)
        app.component('FitParent', FitParent)
        app.component('AnnotationFilter', AnnotationFilter)
        app.component('MultiplePDF', MultiplePDF)
        app.component('AnnoAttachment', AnnoAttachment)
        app.component('AnnoForms', AnnoForms)
        app.component('AnnoLinks', AnnoLinks)
        app.component('Loaded', Loaded)
    }
})