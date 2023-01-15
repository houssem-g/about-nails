// https://gitlab.com/saurabhshah231/reactjs-myapp/-/blob/master/src/App.js

import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/navbar';
import Footer from "../../components/footer";
import FAQPage from '../../components/faq';

const FaqView = () => {
    const styles = {
      containerHomeView: {
          display: "flex",
          flexDirection: "column"
      },
      containerBody:{
        backgroundColor: "#f8ecec",
      }
  };
  
  

    return (
        <div style={styles.containerHomeView}>
            <div>
                <Navbar titles={["Accueil", "Nouveautés", "Collections", "Catalogue", "Gel Pads", "Avis clients", "FAQ"]}/>
            </div>
            
            <div style={styles.containerBody}>
              <FAQPage />
            </div>

            <div>
               <Footer /> 
            </div>

            
        </div>
    )
}

FaqView.propTypes = {
    title: PropTypes.string.isRequired
}

export default FaqView
