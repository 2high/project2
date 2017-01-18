# project2

###Introduction

Coffee & cakes is a small website build it with React.js where the user can Create, Read, Update and Delete the information about coffee venues.

###Code Example

My axios post method where the user can insert the LOCATION, NAME, COFFEE SCORE, CAKE SCORE and COMMENT.
Then clear the input for new info.

```Javascript
  createLocation() {
      console.log(this.refs)
      axios({
        method: 'POST',
        url: `https://coffee-cake-194f3.firebaseio.com/location/area.json`,
        data: {
          location: this.location.value,
          name: this.name.value,
          coffee: this.coffee.value,
          cake: this.cake.value,
          comment: this.comment.value
        }
      }).then(() => {
        console.log("=====>", this.location.value);
        this.location.value = "";
        this.name.value = "";
        this.coffee.value = "";
        this.cake.value = "";
        this.comment.value = "";
      })
    }
 ```
    

###Motivation

Who doesn't love coffee?

###Installation

This project is made it with:
- React.js
- Router v4
- AXIOS
- FIREBASE
- BOOTSTRAP.css
- Patience

### Installation instructions

react
```
create-react-app coffee-cake
```
Router
````
npm install --save react-router
```
Axios
```
npm install --save axios
```
Bootstrap
```
npm install --save bootstrap@3
```
### planning phase explanation
- Install router, axios, bootstrap
- make the components
- Router
- Bootstrap
- Set Up firebase
- Make CRUD axios
- style 


### unsolved problems
How to make the patch more simple and how to make the firebase restrict .


### WIREFRAME
####INDEX
![Alt text] (https://github.com/2high/project2/blob/master/wireframe/Screen%20Shot%202017-01-18%20at%2012.19.45%20AM.png?raw=true)
#### CLICK SHARE
![Alt text] (https://github.com/2high/project2/blob/master/wireframe/Screen%20Shot%202017-01-18%20at%2012.19.56%20AM.png?raw=true)
#### VIEW SHARE
![Alt text] (https://github.com/2high/project2/blob/master/wireframe/Screen%20Shot%202017-01-18%20at%2012.20.07%20AM.png?raw=true)
#### CLICK PLACES
![Alt text] (https://github.com/2high/project2/blob/master/wireframe/Screen%20Shot%202017-01-18%20at%2012.20.16%20AM.png?raw=true)
#### USER SEE THE INFO
![Alt text] (https://github.com/2high/project2/blob/master/wireframe/Screen%20Shot%202017-01-18%20at%2012.20.31%20AM.png?raw=true)
