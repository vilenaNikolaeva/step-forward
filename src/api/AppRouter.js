import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import SignUp from '../components/forms/SignUp';
import Login from '../components/forms/Login';
import SharedResume from '../components/SharedResume';
import ExampleCV from '../components/ExampleCV';
import EditUser from '../components/user/edit/EditUser';
import NotFoundPage from '../components/NotFoundPage';
import UserProfile from './../components/UserProfile';

function AppRouter() {
 /*Check if  user is loggedin*/
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/exampleCv" element={<ExampleCV />}/>
      <Route path="/sharedResume/:id" render={(props) => <SharedResume {...props} />}></Route>
      <Route path="/login" element={<Login/>}/> {/*<Login onLoginChange={this.props.onLoginChange} /></Route>} */}
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/profile" element={<UserProfile/>}/> {/*<PersonalResume isUserLoggedIn={loggedIn}> */}
      <Route path="/edit" element={<EditUser/>}/> {/*<EditUser userId={sessionStorage.getItem(USER_ID)} />< */}
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  );
}

export default AppRouter;
