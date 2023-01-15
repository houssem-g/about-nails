import '.././styles/faq_style/faq.css';
import faqData from '../constants/faqData.js';
import React, { useState } from 'react';

const uniqueCategories = [...new Set(faqData.map(item => item.category))];

function FAQPage() {

  const handleClick = (j, n) => {

    let element = document.getElementById(`faq-item${n}-${j}`);
    if (!element.classList.value.includes("open")) {
        element.classList.add("open");
    } else  {
        element.classList.remove("open");        
    }

  }

  return (
    <div className="faq-page-container">
      {uniqueCategories.map((category, index) => {
        const categoryData = faqData.filter(item => item.category === category);
        return (
          <div key={index} className="category-container">
            <h4>{category}</h4>
            <div className="faq-container">
              {categoryData.map((faq, i) => {
                return (
                  <div
                    key={i}
                    id= {`faq-item${index}-${i}`}
                    onClick={() => handleClick(i, index)}
                    className='faq-item'
                    
                  >
                    <h5 className="faq-question">{faq.question}</h5>
                    <span className='faq-arrow'>&#x25B6;</span>
                    <div className="faq-answer">{faq.response}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default FAQPage;
