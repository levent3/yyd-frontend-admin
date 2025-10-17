import { AgencyExperienceData, PerksData, QualificationsData } from 'Data/jobs';
import { Button } from 'reactstrap';
import { JobDescriptionHeading,AgencyExperience,  JobDetaildec, Perks, Qualifications,  Savethisjob, share } from 'utils/Constant';

const JobDescription = () => {
  return (
    <>
      <div className='job-description'>
        <h6>{JobDescriptionHeading}</h6>
        <p className='text-start'>{JobDetaildec}</p>
      </div>
      <div className='job-description'>
        <h6>{Qualifications}</h6>
        <ul>
          {QualificationsData.map((data,index)=>(<li key={index}>{data}</li>))}          
        </ul>
      </div>
      <div className='job-description'>
        <h6>{AgencyExperience}</h6>
        <ul>
          {AgencyExperienceData.map((data,index)=><li key={index}>{data}</li>)}
        </ul>
      </div>
      <div className='job-description'>
        <h6>{Perks}</h6>
        <ul>
          {PerksData.map((data,index)=><li key={index}>{data}</li>)}
        </ul>
      </div>
      <div className='job-description'>
        <Button color='primary' className='mx-1'><span><i className='fa fa-check'></i></span>{Savethisjob}</Button>
        <Button color='primary'><span><i className='fa fa-share-alt'></i></span>&nbsp;{share}</Button>
      </div>
    </>
  );
};

export default JobDescription;
