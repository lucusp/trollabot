import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const ContentHeader = () => (
    <div class="content-header">
        <h1 class="content-title">daut / quotes</h1>
        <blockquote class="content-subtitle">
            <FaQuoteLeft /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id porta nibh venenatis cras sed felis eget velit aliquet. 
            <FaQuoteRight />
        </blockquote>
  </div>
)


export default ContentHeader;