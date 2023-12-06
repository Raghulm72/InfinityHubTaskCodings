import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const App = () => {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

//doctor referral
const [referralFiles, setReferralFiles] = useState([]);
const [selectedReferralFile, setSelectedReferralFile] = useState(null);
const [showReferralModal, setShowReferralModal] = useState(false);

const [psychologicalReport, setPsychologicalReport] = useState(null);
const [autismDiagnosisAssessment, setAutismDiagnosisAssessment] = useState(null);

  const totalSteps = 3; // Set the total number of steps

  const [basicDetails, setBasicDetails] = useState({
    firstName: '',
    lastName: '',
    ssnumber: '',
    gender:'',
    address1:'',
    address2:'',
    city:'',
    state:'',
    zipcode:'',
    // Add more basic details fields as needed
  });

  const [guardianDetails, setGuardianDetails] = useState({
    guardianFName: '',
    guardianLName:'',
    email:'',
    homephone:'',
    cellphone:'',
    workphone:'',
    workphnext: '',
    gaddress1: '',
    gaddress2: '',
    gcity: '',
    gstate:'',
    gzipcode:'',
    // Add more guardian details fields as needed
  });

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Submitted data:', { ...basicDetails, ...guardianDetails });
  };
  const handleFileUpload = (event) => {
    const selectedFiles = event.target.files;
    if(selectedFiles.length<=10){
    const newFiles = Array.from(selectedFiles);
    setFiles(newFiles); // Replace existing files with new files
    }else{

      alert("Please Upload max of 10 files");
      return false;
    }
  };
  const handleViewFile = (file) => {
    setSelectedFile(file);
    window.open(URL.createObjectURL(file), '_blank');
  };
  const handleDeleteFile = (fileIndex) => {
    const updatedFiles = [...files];
    updatedFiles.splice(fileIndex, 1);
    setFiles(updatedFiles);
  };
  const handleViewFiles = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  //referral
  const handleReferralFileUpload = (event) => {
    const selectedFiles = event.target.files;
    if(selectedFiles.length<=10){
    const newFiles = Array.from(selectedFiles);
    setReferralFiles(newFiles); // Replace existing files with new files
    console.log(referralFiles); 
    }else{

      alert("Please Upload max of 10 files");
      return false;
    }
  };
  const handleReferralViewFile = (file) => {
    setSelectedReferralFile(file);
    window.open(URL.createObjectURL(file), '_blank');
  };

  const handleReferralDeleteFile = (fileIndex) => {
    const updatedReferralFiles = [...referralFiles];
    updatedReferralFiles.splice(fileIndex, 1);
    setReferralFiles(updatedReferralFiles);
  };

  const handleViewReferralFiles = () => {
    setShowReferralModal(true);
  };

  const handleCloseReferralModal = () => {
    setShowReferralModal(false);
  };

  const handleFileChange = (e, fileType) => {
    const selectedFile = e.target.files[0];

    if (fileType === 'psychologicalReport') {
      setPsychologicalReport(selectedFile);
    } else if (fileType === 'autismDiagnosisAssessment') {
      setAutismDiagnosisAssessment(selectedFile);
    }
  };

  
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className='row'>
            <h4>Step 1: Basic Details</h4>
            <br></br>
            <div className='col-sm-12'>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={basicDetails.firstName}
                      onChange={(e) => setBasicDetails({ ...basicDetails, firstName: e.target.value })}

                    />
                  </div>
                  </div>
                  <div className='col-sm-6'>
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={basicDetails.lastName}
                      onChange={(e) => setBasicDetails({ ...basicDetails, lastName: e.target.value })}

                    />
                  </div>
                  </div>
                  </div>
                  <div className='row'>
                <div className='col-sm-6'>
                  <div className="mb-3">
                    <label htmlFor="ssnumber" className="form-label">
                      Social Security Number*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="ssnumber"
                      value={basicDetails.ssnumber}
                      onChange={(e) => setBasicDetails({ ...basicDetails, ssnumber: e.target.value })}

                    />
                  </div>
                  </div>
                <div className='col-sm-6'>
                  <div className="mb-3">
                    <label htmlFor="dob" className="form-label">
                      DOB*
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dob"
                      value={basicDetails.dob}
                      onChange={(e) => setBasicDetails({ ...basicDetails, dob: e.target.value })}

                    />
                  </div>
                </div>
                </div>
                <div className='row'>
                <div className='col-sm-6'>
                  <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                className="form-select"
                id="gender"
                value={basicDetails.gender}
                onChange={(e) => setBasicDetails({ ...basicDetails, gender: e.target.value })}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className="mb-3">
                    <label htmlFor="Address1" className="form-label">
                      Address1*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address1"
                      value={basicDetails.address1}
                      onChange={(e) => setBasicDetails({ ...basicDetails, address1: e.target.value })}

                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Address2" className="form-label">
                    Address2*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      value={basicDetails.address2}
                      onChange={(e) => setBasicDetails({ ...basicDetails, address2: e.target.value })}

                    />
                  </div>
                  
                </div>
                
              </div>
              <div className='row'>
                <div className='col-sm-4'>
                  <div className="mb-3">
                    <label htmlFor="City" className="form-label">
                      City*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      value={basicDetails.city}
                      onChange={(e) => setBasicDetails({ ...basicDetails, city: e.target.value })}

                    />
                  </div>
                  </div>
                  <div className='col-sm-4'>
                  <div className="mb-3">
                    <label htmlFor="State" className="form-label">
                    State*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      value={basicDetails.state}
                      onChange={(e) => setBasicDetails({ ...basicDetails, state: e.target.value })}

                    />
                  </div>
                  
                </div>
                <div className='col-sm-4'>
                  <div className="mb-3">
                    <label htmlFor="zipcode" className="form-label">
                    Zip/Postal Code*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zipcode"
                      value={basicDetails.zipcode}
                      onChange={(e) => setBasicDetails({ ...basicDetails, zipcode: e.target.value })}

                    />
                  </div>
                  
                </div>
                
              </div>
            </div>
            {/* Add more basic details fields as needed */}
          </div>
        )}

        {step === 2 && (
          <div>
            <h4>Step 2: Guardian Details</h4>
            <br></br>
            <div className='row'>
                <div className='col-sm-6'>
            <div className="mb-3">
              <label htmlFor="guardianName" className="form-label">
               Parent /  Guardian First Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="guardianFName"
                value={guardianDetails.guardianFName}
                onChange={(e) => setGuardianDetails({ ...guardianDetails, guardianFName: e.target.value })}
              />
            </div>
            </div>
            <div className='col-sm-6'>
            <div className="mb-3">
              <label htmlFor="guardianLName" className="form-label">
               Parent /  Guardian Last Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="guardianLName"
                value={guardianDetails.guardianLName}
                onChange={(e) => setGuardianDetails({ ...guardianDetails, guardianLName: e.target.value })}
              />
            </div>
            </div>
            </div> 
            <div className='row'>
                <div className='col-sm-6'>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
               Primary Email*
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={guardianDetails.email}
                onChange={(e) => setGuardianDetails({ ...guardianDetails, email: e.target.value })}
              />
            </div>
            </div>
            <div className='col-sm-6'>
            <div className="mb-3">
              <label htmlFor="HOmePhone" className="form-label">
               Home Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="homephone"
                value={guardianDetails.homephone}
                onChange={(e) => setGuardianDetails({ ...guardianDetails, homephone: e.target.value })}
              />
            </div>
            </div>
            </div> 
            <div className='row'>
                <div className='col-sm-6'>
            <div className="mb-3">
              <label htmlFor="CellPhone" className="form-label">
               Cell Phone*
              </label>
              <input
                type="text"
                className="form-control"
                id="cellphone"
                value={guardianDetails.cellphone}
                onChange={(e) => setGuardianDetails({ ...guardianDetails, cellphone: e.target.value })}
              />
            </div>
            </div>
            <div className='col-sm-6'>
            <div className="mb-3">
              <label htmlFor="Wrok Phone" className="form-label">
               Wrok Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="workphone"
                value={guardianDetails.workphone}
                onChange={(e) => setGuardianDetails({ ...guardianDetails, workphone: e.target.value })}
              />
            </div>
            </div>
            </div> 
            <div className='row'>
                <div className='col-sm-12'>
            <div className="mb-3">
              <label htmlFor="workphnext" className="form-label">
              Work Phone Ext
              </label>
              <input
                type="text"
                className="form-control"
                id="workphnext"
                value={guardianDetails.workphnext}
                onChange={(e) => setGuardianDetails({ ...guardianDetails, workphnext: e.target.value })}
              />
            </div>
            </div>
            </div> 
            <div className='row'>
                <div className='col-sm-12'>
                  <div className="mb-3">
                    <label htmlFor="Address1" className="form-label">
                      Address1*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="gaddress1"
                      value={basicDetails.gaddress1}
                      onChange={(e) => setBasicDetails({ ...basicDetails, gaddress1: e.target.value })}

                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Address2" className="form-label">
                    Address2*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="gaddress2"
                      value={basicDetails.gaddress2}
                      onChange={(e) => setBasicDetails({ ...basicDetails, gaddress2: e.target.value })}

                    />
                  </div>
                  
                </div>
                
              </div>
              <div className='row'>
                <div className='col-sm-4'>
                  <div className="mb-3">
                    <label htmlFor="City" className="form-label">
                      City*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="gcity"
                      value={basicDetails.gcity}
                      onChange={(e) => setBasicDetails({ ...basicDetails, gcity: e.target.value })}

                    />
                  </div>
                  </div>
                  <div className='col-sm-4'>
                  <div className="mb-3">
                    <label htmlFor="State" className="form-label">
                    State*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="gstate"
                      value={basicDetails.gstate}
                      onChange={(e) => setBasicDetails({ ...basicDetails, gstate: e.target.value })}

                    />
                  </div>
                  
                </div>
                <div className='col-sm-4'>
                  <div className="mb-3">
                    <label htmlFor="zipcode" className="form-label">
                    Zip/Postal Code*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="gzipcode"
                      value={basicDetails.gzipcode}
                      onChange={(e) => setBasicDetails({ ...basicDetails, gzipcode: e.target.value })}

                    />
                  </div>
                  
                </div>
                
              </div>
          </div>
        )}

{step === 3 && (
          <div>
            <h4>Step 3: File Details</h4>
            <br></br>
            <div className='row'>
                <div className='col-sm-6'>
                <div className="mb-3">
              <label htmlFor="file" className="form-label">
                Insurance Card (Click here to upload or drag and drop a file (max file upload 10 MB))
              </label>
              <input
                type="file"
                className="form-control"
                id="file"
                multiple
                accept=".pdf"
                onChange={handleFileUpload}
               />
               10 FIles Upload | Click here to view the documents <span onClick={handleViewFiles} style={{color:'blue',fontWeight:'600',cursor:'pointer'}}>File Lists</span>
            </div>
            </div>
            </div> 
            <div className='row'>
            <div className='col-sm-6'>
                  <div className="mb-3">
                    <label htmlFor="referralFile" className="form-label">
                      Doctor Referral (Click here to upload or drag and drop a file (max file upload 10 MB))
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="referralFile"
                      multiple
                      accept=".pdf"
                      onChange={handleReferralFileUpload}
                    />
                    10 Files Upload | Click here to view the documents{' '}
                    <span
                      onClick={handleViewReferralFiles}
                      style={{ color: 'blue', fontWeight: '600', cursor: 'pointer' }}
                    >
                      Referral File Lists
                    </span>
                  </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                <div className="mb-3">
              <label htmlFor="file" className="form-label">
                Psychological Report
              </label>
              <input
                type="file"
                className="form-control"
                id="file"
                multiple
                accept=".pdf"
                onChange={(e) => handleFileChange(e, 'psychologicalReport')}
               />
               
            </div>
            </div>
            </div> 
            <div className='row'>
                <div className='col-sm-6'>
                <div className="mb-3">
              <label htmlFor="file" className="form-label">
              Autism Diagnosis Assessment
              </label>
              <input
                type="file"
                className="form-control"
                id="file"
                multiple
                accept=".pdf"
                onChange={(e) => handleFileChange(e, 'autismDiagnosisAssessment')}
               />
               
            </div>
            </div>
            </div> 
          </div>
        )}

        <div className="mt-4">
          {step > 1 && (
            <button type="button" className="btn btn-primary mr-2" onClick={handlePrevious}>
              Previous
            </button>
          )}
          &nbsp;&nbsp;&nbsp;
          {step < totalSteps ? (
            <button type="button" className="btn btn-primary" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          )}
        </div>
        <div>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Uploaded Files</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ul>
                {files.map((file, index) => (
                  <li key={index}>
                    {file.name}{' '}
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={() => handleViewFile(file)}
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-link text-danger"
                      onClick={() => handleDeleteFile(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showReferralModal} onHide={handleCloseReferralModal}>
          <Modal.Header closeButton>
            <Modal.Title>Uploaded Referral Files</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {  referralFiles.map((file, index) => (
                <li key={index}>
                  {file.name}{' '}
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => handleReferralViewFile(file)}
                  >
                    View
                  </button>{' '}
                  <button
                    type="button"
                    className="btn btn-link text-danger"
                    onClick={() => handleReferralDeleteFile(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseReferralModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </form>
    </div>
  );
};

export default App;
