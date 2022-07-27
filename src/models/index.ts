import { Company } from './company';
import { Candidate } from './candidate';
import { Jobs } from './jobs';

Candidate.belongsToMany(Jobs, { through: 'job_candidates' });

Company.hasMany(Jobs);

Jobs.belongsTo(Company);
Jobs.belongsToMany(Candidate, { through: 'job_candidates' });

export {
  Candidate,
  Company,
  Jobs
}