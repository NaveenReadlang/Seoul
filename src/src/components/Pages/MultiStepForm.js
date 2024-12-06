import React, { useState } from 'react';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {['Step 1', 'Step 2', 'Step 3'].map((step, index) => (
          <div
            key={index}
            style={{
              margin: '0 10px',
              padding: '10px',
              borderRadius: '50%',
              backgroundColor: currentStep === index + 1 ? 'blue' : 'lightgray',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            {step}
          </div>
        ))}
      </div>

      <div style={{ padding: '20px', border: '1px solid #ccc' }}>
        {currentStep === 1 && (
          <div>
            <h2>Step 1: Personal Details</h2>
            <form>
              <input type="text" placeholder="Enter Name" required />
              <br />
              <input type="email" placeholder="Enter Email" required />
            </form>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2>Step 2: Address Details</h2>
            <form>
              <input type="text" placeholder="Enter Address" required />
              <br />
              <input type="text" placeholder="Enter City" required />
            </form>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2>Step 3: Confirm Details</h2>
            <p>Review all your details and click Submit.</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        {currentStep > 1 && (
          <button onClick={handlePrevious} style={{ padding: '10px 20px' }}>
            Back
          </button>
        )}

        {currentStep < 3 ? (
          <button onClick={((e)=>{
            e.preventDefault()
            handleNext()})} style={{ padding: '10px 20px' }}>
            Next
          </button>
        ) : (
          <button onClick={handleSubmit} style={{ padding: '10px 20px' }}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
