import React from "react";
import UserProfile from "../components/UserProfile";
import { useAuth } from "./../contexts/AuthCtx";
import { Link } from "react-router-dom";

import { FaFileInvoice } from 'react-icons/fa';
import templateOne from '../assets/images/templateOne.png';
import templateTwo from '../assets/images/templateTwo.png';
import styles from '../assets/scss/componentsStyles/HomePage.module.scss';

function HomePage() {
  const { currentUser } = useAuth();
  return <>{currentUser ? <UserProfile /> :
    <div className={styles.homeContainer}>
      <div className={styles['homeContainer-welcome']}>
        <label>
          Do you want to make brand-new resume or Cover letter
          or help someone create their own ?
        </label>
        <span>
          Launch the new adventure to your profesional life.
        </span>
        <span>
          Take a <b>Step Forward</b> and change your future.
        </span>
        <Link to="signUp">
          <button>Get Started</button>
        </Link>
      </div>
      <div className={styles['homeContainer-templateInfo']}>
        <span>
          The platform here provides a few templates from whitch you can choose
          the best for you.
        </span>
        <span>
          Once you pick up the template just fill up your information
          and you will be ready to share it .
        </span>
        <FaFileInvoice />
      </div>
      <div className={styles['homeContainer-templates']}>
        <img className={styles['homeContainer-templates-imgOne']} alt="templateImg" src={templateOne} width={260} height={350} />
        <img className={styles['homeContainer-templates-imgTwo']} alt="templateImg" src={templateTwo} width={260} height={350} />
      </div>
      <div className={styles['homeContainer-examples']}>
        <label> Feel free to draw ideas from the examples </label>
        <span>You will also find some tips for "how to" or "how not to" before you start with building your document</span>
        <Link to="/">
          <button>
            Check out the examples
          </button>
        </Link>
      </div>
    </div>
  }</>;
}

export default HomePage;
