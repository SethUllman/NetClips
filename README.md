# README

## NetClips

NetClips is a clone of the popular video streaming service Netflix.

This project was designed and built in under two weeks.

You can find it [here!](https://net-clips.herokuapp.com/?#/signup)

## Login/Signup

The login/signup screen features fully functional frontend and backend user authentication. 
User passwords are salted and hashed using the Ruby gem 'Bcrypt'.

![Login Page](/app/assets/images/login.png)


## Home Page

The Home page features the use of the 'React-Player' api, as well as advanced css
styling techniques such as transitions and animations.

![Home Page](/app/assets/images/home.png)

## Hover Animation

The row and hovered video shift and resize as you navigate the page.
![Home Animation](/app/assets/images/home_animation.png)

## Dropdown Content

On dropdown, the selected videos information is displayed as well as a preview.
![Home Dropdown](/app/assets/images/home_dropdown.png)

## Making the Dropdown

The dropdown content is divided into three parts, the left info box, the video preview on the right, and the divider in the middle to transition between the two halves.
```javascript
<div className='drop-content'>
  <div className='drop-background'>
    <div className='left'></div>
    <div className='right'>
      <ReactPlayer
        className='drop-movie'
        url={this.state.currentMovie.video_url}
        playing={true}
        controls={false}
        width={'68vw'}
        height={'42vw'}
        loop={false}
        volume={0}
        muted={true}
      />
    <div className='right-X' onClick={this.hideResults}>X</div>
  </div>
</div>
```
### Gradient

The SCSS below is my solution to seamlessly connecting the content and the video player.
```SCSS
.left {
  background: black;
  color: white;
  width: 30%;
  position: relative;
}

.left:before {
  content: '';
  position: absolute;
  background-image: linear-gradient(to right,#000, transparent);
  top: 0;
  bottom: 0;
  left: 100%;
  width: 275px;
  z-index: 1;
}

.right {
  width: 70%;
  display: flex;
  justify-content: flex-end;
}
```

## Dropdown Content Position

I ran into the problem of having the dropdown content appear in a different location depending on which row the selected film was located in. This was my solution.

First I defined what the Movie dropdown would look like.
```javascript
const MovieShow = (this.state.showResults) ? (
      
      <div className='drop-content'>
        <div className='drop-background'>
          <div className='left'></div>
          <div className='right'>
```

Next I set a new variable equal to MovieShow depending on the selected movies genre.

```javascript
if (this.state.currentMovie) {
  if (this.state.currentMovie.genres === ('TV Comedy')) {
    this.MovieShow1 = MovieShow;
  } else if (this.state.currentMovie.genres === ('Sci-Fi & Fantasy')) {
    this.MovieShow2 = MovieShow;
  } else if(this.state.currentMovie.genres === ('Drama')) {
    this.MovieShow3 = MovieShow;
  } else if(this.state.currentMovie.genres === ('Critically Acclaimed' {
    this.MovieShow4 = MovieShow;
  }
}
```

Finally, each MovieShow variable is rendered directly underneath their respective genre. The MovieShow for the current film will render the dropdown content while the rest will render empty div tags.

```javascript
<div className='genre-div'>     
  <ul className='movie-ul'>
    <div>
      <h3 className='genre-title'>TV Comedy</h3>
    </div>
    <div className='movie-lis'>
    {
      tv_comedy.map( movie => (
        <MovieItem
        key={movie.id}
        movie={movie}
        that={this}
        state={this.state}
        />
      ))
    }
    </div>
  </ul>
  <div>
    {this.MovieShow1}
  </div>
</div>
```

## Technologies Used
* Ruby onn Rails -v 5.2.3

* Javascript

* HTML

* SCSS

* PostgreSQL

## Libraries used:
* React.js

* Redux

* JQuery

* React-Player

* BCrypt

## Features:
* Signup and Login using the demo login or a custom email & password

* Home page displays videos as well as info on all the clips

* Click play to watch video fullscreen with audio

## Future Features:
* Favorite videos using My List

* Search by Title, genres, or actors via search bar

* Browse by Movies, or TV Shows
