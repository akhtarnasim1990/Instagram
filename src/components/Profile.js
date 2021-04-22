import { React , Component } from 'react';
import classes from './Profile.module.css';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            profileImg : 
            'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSZ3C_LfOumvyUqOQkY8FFICunlhyXMak4g&usqp=CAU' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CCwm3DMFhvRfFivLWf6BBjBGZJQsrFup-A&usqp=CAU' , `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTgY9-Ujet_NqFjDO4_ugIxx5oGAa6_P0Uw&usqp=CAU` , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSZ3C_LfOumvyUqOQkY8FFICunlhyXMak4g&usqp=CAU'  ],
        }
    }

    render () {
        const images = this.state.images;
        const profileImg = this.state.profileImg; 
        return (
            <div className={classes.main}>
                <div className={classes.Profile}>
                    <div className={classes.Img}>
                        <img src={profileImg} alt='img'></img> 
                    </div>
                    <h3>My Name Is Fury</h3>
                    <p>My Profession is coding</p>
                    <button>Edit</button>
                </div>
                <div className={classes.like}>
                    <div><span>98</span><p>Posts</p></div>.
                    <div><span>4.2k</span><p>Followers</p></div>.
                    <div><span>830</span><p>Followings</p></div>
                </div>
                <div className={classes.story}>
                    <h2 >Fury Jonathan</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <p><b><a href='https://www.figma.com/file/GXu1UHZXDH5RFWdPC68hpn/Instagram?node-id=0%3A1' target="_blank" rel="#">click here</a></b></p>
                </div>
                <div className={classes.myStory}>
                    <h3>Your Story</h3>
                    <div className={classes.imagesCtr}>
                        {images.map(src =><div className={classes.imagesDiv}> <img className={classes.images} src={src} alt="img" /> <p>city</p></div>)}
                    </div>
                </div>
                <div className={classes.btn}>
                    <button>Create Post</button>
                </div>
            </div>
        );
    };
}

export default Profile;