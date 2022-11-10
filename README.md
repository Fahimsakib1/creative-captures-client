# Creative Captures
Creative Captures is a online Service Review platform  where the user can add reviews of the services he/she has  availed for. For giving the reviews a user has to be logged in. After successful login one can add review of any specific service. Besides there are edit and deleted options for the reviews. There are many other features also which are described below.

This website is made by using React Router DOM, Firebase Authentication, amd Mongodb as the database. CRUD operation is the major part of this project. Besides tailwind css is used for the styling purpose. Some component libraries are also used for the design. React toastify and sweet alert is added to show the alerts for better user experience.

This is project is basically divided in two parts. 
- Client Side
- Server Side

## Client Side
- In the client user can experience the smooth UI/UX of this project. In the home page a user can see the image slider related to the service I ama providing. Besides there are some (limited to 3) services added on the homepage. But if a user goes to the services page then he can see all the services available. Not only that he can add services by his own and can give review.

## Server Side
- For the server side I have used node.js and express.js for the server purpose. I have created many data according to the services and all the data are sent to the mongodb server. there is no static data in this project.

This project is based on online service review. For the services data I have hosted the data on Mongodb and fetched the data when needed. Some times the user update the review so in that case the data will be updated in the mongodb server also. 


## Project Features
- This project helps a user to add review of the services he/she has experienced.
- There is a home page That contains a slider, some service data and some other section related to the project.
- In the all services page there listed all the services that are available right now.
- when a user clicked on a service details button then the user will be directed to a service details route which he has chosen.
- After getting in to the service details section user can see all the information related to the service(name, price, duration etc)
- On the right side of the service details page all the reviews are added of that service
- If the user wants he/she can also add review of that service but for that he/she needs to login first.
- After the successful login user can add the review and after the successful review he can see the review on the MY Reviews section. All the reviews are sent to the mongodb server 
- On the My Reviews Page user will see all the reviews added by him/her. If user wants they can also delete and update the reviews as well
- There is a blog page in this website where some the questions and answers is given based on the project requirements.
- Authentication is an important part of the website. There are some routes that are private routes. Which means a user can not visit the route if he is not logged in.
- For the Authentication purpose I have used the google's Firebase authentication system. I have added some authentication systems. 1) Email and Password Login 2) Google Login 
- If a user wants he can directly login by using his/her google account.
- The Navbar of this projects shows the logged in user's information such as the name (if the user has a display name) or the email. All these information are shown by conditional rendering.
- If a user is not login to the website then the nav bar will show the register and login options. user can toggle between these two.
- Register and Login form is created for the user to get registered and logged in.
- If someone wants to visit a route which is not available in the website then an error message will be shown.  
- By clicking the Add Service link on the nav bar(Private Route) User can add service by giving the necessary service details.
- CRUD operation was the main and core concern of this website.


## Frameworks and Libraries used in this project
### React Router DOM: 
- React Router DOM is an npm package that enables and implements dynamic routing in a web app. It allows the developer to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.

### Firebase: 
- Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google’s infrastructure. For the authentication  purpose I have used firebase in this project.

### Tailwind CSS and it's Component Library: 
- Tailwind CSS was used in the website and some of the component libraries of Tailwind was used such as: daisyUI, MambaUI, AntDesign, Kitwind etc. 

### React FontAwesome  And React Icons: 
- React Font Awesome is used to show the icons in the project

### React Toastify  And Sweet Alert: 
Toast or Toastify notifications are pop-up messages that display some information to the user. This information could be a success message, warning, error, and so on.

- React-Toastify is one of the top React toast libraries available. This tool allows the user to add toast notifications to the application with ease and can also be used to set notifications and alerts.

- Sweet Alert is also used to show alert for the successful login and registration. for the error alerts is has been used also.


### GitHub Link (Client Side) of This Project: 
Github Link Client Side: https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-Fahimsakib1


### GitHub Link (Server Side) of This Project:
Github Link Server Side:  https://github.com/Porgramming-Hero-web-course/b6a11-service-review-server-side-Fahimsakib1

### Firebase Live Site Link:
Live Site Link: https://creative-captures.web.app