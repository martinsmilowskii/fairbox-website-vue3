import { reactive } from 'vue'

const state = reactive({
    images: [
        {
            image: require('@/assets/images/home-gallery/fairbox-conference.jpg'),
            alt: 'fairbox conference'
        },
        {
            image: require('@/assets/images/home-gallery/fairbox-main-partner.jpg'),
            alt: 'fairbox main partner'
        },
        {
            image: require('@/assets/images/home-gallery/fairbox-office.jpg'),
            alt: 'fairbox office'
        },
        {
            image: require('@/assets/images/home-gallery/fairbox-sub-partner.jpg'),
            alt: 'fairbox sub partner'
        },
        {
            image: require('@/assets/images/home-gallery/jan-kowalski-seo.jpg'),
            alt: 'jan kowalski seo'
        },
        {
            image: require('@/assets/images/home-gallery/stand-up-meeting.jpg'),
            alt: 'stand up meeting'
        },
    ]
})


export default {
    state
}