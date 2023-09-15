import React from 'react';
import classes from './pageHead.module.scss';

function PageHead({title}) {
  return (
    <div className={classes.pageHead}>
    <div className="container">
      <h2 className={classes["pageHead--title"]}>{title}</h2>

      <p className={classes["pageHead--description"]}>
        Et harum quidem rerum facilis est et expedita distinctio. Nam libero
        tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
        minus id quod maxime
      </p>
    </div>
  </div>
  )
}

export default PageHead