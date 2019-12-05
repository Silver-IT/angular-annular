import { Injectable } from '@angular/core';

@Injectable()
export class LandingService {
    constructor() { }
    
    getMenuItems(){
        return [ 'home', 'features', 'works', 'services', 'testimonials',  'pricing', 'contact' ];
    }

    getFeatures(){
        return [
            { 
                icon: 'cloud_upload', 
                title: 'Instant Cloud', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            { 
                icon: 'thumb_up', 
                title: 'Better Ideas', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            { 
                icon: 'trending_up', 
                title: 'Performace', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            { 
                icon: 'access_time', 
                title: 'Time Tracker', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            { 
                icon: 'desktop_windows', 
                title: 'Desktop app', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            { 
                icon: 'card_giftcard', 
                title: 'Gift Voucher', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            { 
                icon: 'report', 
                title: 'Weekly Reports', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            { 
                icon: 'add_shopping_cart', 
                title: 'E-commerce', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            }
        ];
    }

    getServices(){
        return [
            { 
                icon: 'computer', 
                title: 'Web Development', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            { 
                icon: 'palette', 
                title: 'Web Design', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            { 
                icon: 'photo_camera', 
                title: 'Photography', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            { 
                icon: 'queue_music', 
                title: 'Music Writting', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            { 
                icon: 'volume_up', 
                title: 'Advertising', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            },
            { 
                icon: 'contact_support', 
                title: '24/7 Support', 
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.'
            }
        ];
    }

    getWorks(){
        return [
            { name: 'Project 1', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.', src: 'https://images.unsplash.com/photo-1522199670076-2852f80289c3?w=650' },
            { name: 'Project 2', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.', src: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=650' },
            { name: 'Project 3', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.', src: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=650' },
            { name: 'Project 4', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.', src: 'https://images.unsplash.com/photo-1493932484895-752d1471eab5?w=650' },
            { name: 'Project 5', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.', src: 'https://images.unsplash.com/photo-1422480041422-130238c67fe2?w=650' },
            { name: 'Project 6', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.', src: 'https://images.unsplash.com/photo-1501856777435-29877ed80a3d?w=650' }
        ]
    }

    getClients(){
        return [
            'assets/img/clients/dream.png',  
            'assets/img/clients/congrats.png',
            'assets/img/clients/best.png',
            'assets/img/clients/original.png',
            'assets/img/clients/king.png',
            'assets/img/clients/love.png',
            'assets/img/clients/the.png',
            'assets/img/clients/easter.png',
            'assets/img/clients/with.png',
            'assets/img/clients/special.png',
            'assets/img/clients/bravo.png'
        ];
    }
    
    getTestimonials(){
        return [
            { 
                text: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros.', 
                author: 'Mr. Adam Sandler', 
                company: 'General Electric', 
                image: 'assets/img/profile/adam.jpg' 
            },
            { 
                text: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros.', 
                author: 'Mrs. Ashley Ahlberg', 
                company: 'Dell EMC', 
                image: 'assets/img/profile/ashley.jpg' 
            },
            { 
                text: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros.', 
                author: 'Mr. Bruno Vespa', 
                company: 'Southwest Airlines', 
                image: 'assets/img/profile/bruno.jpg' 
            },
            { 
                text: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus. Etiam orci lacus, volutpat at egestas sit amet, vestibulum sit amet eros.', 
                author: 'Mrs. Julia Aniston', 
                company: 'Apple Co', 
                image: 'assets/img/profile/julia.jpg' 
            }
        ];
    }
    
} 