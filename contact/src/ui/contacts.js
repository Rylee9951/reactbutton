import React from 'react';
import { Link } from 'react-router';

import People from 'data/people'

export default React.createClass({
  render: function() {
    return (
      <div>
      	<ul>
      		{People.map(function(person) {
      			return (
  					<li>{person.name}</li>
      			)
      		}}

      	</ul>
      </div>
    )
  }
});