import { computed, signal, effect } from '@angular/core';
import { Person, Project } from '@core/models';

export class SimulationService {
  // initialise signals from localstorage or with an empty object
  personalInfo = signal<Person>(
    JSON.parse(localStorage.getItem('personalInfo') || '{}')
  );

  projectInfo = signal<Project>(
    JSON.parse(localStorage.getItem('projectInfo') || '{}')
  );

  constructor() {
    // to local storage
    effect(() =>
      localStorage.setItem('personalInfo', JSON.stringify(this.personalInfo()))
    );

    effect(() =>
      localStorage.setItem('projectInfo', JSON.stringify(this.projectInfo()))
    );
  }

  // computed signals
  cost = computed(() => this.calculateProjectCost(this.projectInfo()));

  isEligibale = computed(
    () => !(this.projectInfo()?.ownership != 'owner' || this.cost() < 0)
  );

  // methods to be unit tested ...
  updatePersonalInfo = (person: Person) => {
    if (person) {
      this.personalInfo.set(person);
    }
  };
  updateProjectInfo = (project: Project) => {
    if (project) {
      this.projectInfo.set(project);
    }
  };

  calculateProjectCost = (project: Project) => {
    const surface = project.surface;
    const income = project.income;
    const householdPeopleNumber = project.peopleNumber;
    const cost = surface * 80;
    return cost * 0.75 - (income / householdPeopleNumber) * 0.15;
  };
}
