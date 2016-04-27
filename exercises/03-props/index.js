var VacancySign = React.createClass({
  render: function() {
    if (this.props.hasVacancy) {
      return (
        <div>Vacancy</div>
      );    
    } else {
      return (
        <div>No Vacancy</div>
      );
    }
  }
}); // Create your component here

// Once you create your component, render your component and try both states.
ReactDOM.render(
  <VacancySign hasVacancy={true} />,
  document.getElementById('container')
);
