## Root: A React Redux Application

I wanted to build an app I would find useful while also practicing building a React/Redux application.

I brainstormed any challenges I was having that could be aided with the help of a useful app. As I am constantly learning and taking online courses, I began to think about all the digital platforms I use.

Udemy, Coursera, Khan Academy, EdX, online textbooks... with so many wonderful resources online, it would be great to have one place you can go to manage and organize all your learning platforms!

I created Root. Root allows you to consolidate all your digital learning platforms into one application.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/vdb1up7e6c4h7rb7xkyn.png)

You can see all your courses for a single application.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/ovwj8dopbw160disv4u2.png)

Each course, also has the functionality to add to do items.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/c09mhf7p9g7behj37tjs.png)


### Backend - a rails api

I built the backend as a Rails API with a PostgreSQL database. I wanted to keep this app simple (at least to start) - I included 3 models as a basic framework.

1. Platform
2. Course
3. Todo

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/jtpiy86a6vfuguhklzpc.png)
For serialization I used the active_model_serializer gem and intentionally nested everything into the platforms index page.

### Frontend - react/redux/bootstrap

To organize the frontend architecture, I have 3 containers and 12 components.

The top-most component, the App component, is responsible for three main things.

It renders the NavigationBar and Jumbrotron components. It renders The Platforms container, which holds all other containers and components. It also renders a Layout component and holds the same layout for entire application.

          <NavigationBar/>
          <Jumbotron/>
          <Layout>
            <PlatformsContainer/>
          </Layout>

### Overview: **Containers** + _Components_

_App_
_Navigation_ (functional)
_Jumbotron_ (functional)
_Layout_ (functional)

**Platform** **Container**
_Platforms_ (functional)
_Platform_ (functional)
_PlatformInput_

**Course** **Container**
_Courses_ (functional)
_Course_ (functional)
_CourseInput_

**ToDo** **Container**
_ToDos_ (functional)
_ToDoInput_


The redux store holds the platforms which will hold all courses and each course's todos as this is this way I designed my backend. This meant I could use only one single reducer, the platformsReducer which made it easier on the frontend to keep track of which platform courses and todos belong to as I always returned platforms.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/xv15pd2mmxf8abmxih7r.png)
(expanded - to show courses nested)

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/qrf9av9p687rqzfjvij0.png)

I built 4 actions fetchPlatforms, addPlatform, addCourse, and addTo.

### Bootstrap
One thing that was important to me for this project was to really understand Bootstrap. For all my prior projects, I have done all by CSS by hand, which was great because I wanted to really understand how to do all the styling without help.

However, I am at place where I feel comfortable and can now upgrade to Bootstrap and save TIME!

Once I got the hang of importing the react-bootstrap components - the app really came together. [The bootstrap docs](https://react-bootstrap.netlify.com/) are fantastic!

### Next Additions:

These are additions and functionalities that I'm currently working on adding:

* Add a user model
* Ability to login/sign up for an account
* Delete/Edit a platform/course/todo
* Check off a todo

### Installation
#### Backend

* Install Ruby 2.6.1 on your local computer
* Fork the repository from https://github.com/mvlt18/react-redux-backend
* Clone the repository into a directory of your choice with `git clone git@github.com:mvlt18/react-redux-backend.git`
* Navigate to the directory with `cd react-redux-backend`
* Run `bundle install`
* Create the program tables by running `rake db:create` then  `rake db:migrate`
* Seed data is provided by running `rake db:seed`
* Open up a server of your choice

#### Frontend
* Fork the repository from https://github.com/mvlt18/react-redux-frontend
* Clone the repository into a directory of your choice with `git clone git@github.com:mvlt18/react-redux-frontend.git`
* Navigate to the directory `cd react-redux-frontend` in a separate tab from the backend
* Run `npm install` to install dependencies.
* Run `npm start` and open in a separate server than backend to have both running at the same time.

### Demo

https://youtu.be/YBPlq44lY_k

### Contributing

You can make a request or report a bug by creating an issue or by submitting a pull request.
* Create a branch named after the feature or bug.
* Write your code and commit changes/issue with a commit message.
* Push the branch to the master branch.
* Create a pull request, explaining the issue/reason for change/feature addition.

## License

Fresh Bites is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
