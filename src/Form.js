import React, { useState } from 'react';
import { Button, Stepper, Step, StepLabel, Typography, TextField, FormControl } from '@mui/material';
import { useForm, FormProvider, useFormContext, Controller } from 'react-hook-form'

function getSteps(){
    return [
        "Personal Details", "Contact Details", "Address Details", "Educational Details", "Payment Details",
    ];
}

const PersonalDetails = () => {
    const {control} = useFormContext();
    return (   <>
        <Controller control={control} name='firstname' render={({field}) =>(
            <TextField fullWidth id="firstname" label="Enter Your First Name" variant='outlined' placeholder='Enter Your First Name' margin="normal" {...field} />
        )} />
        <Controller control={control} name='middlename' render={({field}) =>(
            <TextField fullWidth id="middlename" label="Enter Your Middle Name" variant='outlined' placeholder='Enter Your Middle Name' margin="normal" {...field} />
        )} />
        <Controller control={control} name='lastname' render={({field}) =>(
            <TextField fullWidth id="lastname" label="Enter Your Last Name" variant='outlined' placeholder='Enter Your Last Name' margin="normal" {...field} />
        )} />
        <Controller control={control} name='fathername' render={({field}) =>(
            <TextField fullWidth id="fathername" label="Enter Your Father Name" variant='outlined' placeholder='Enter Your Father Name' margin="normal" {...field} />
        )} />
        <Controller control={control} name='mothername' render={({field}) =>(
            <TextField fullWidth id="mothername" label="Enter Your Mother Name" variant='outlined' placeholder='Enter Your Mother Name' margin="normal" {...field} />
        )} />
    </>

    );
}
const ContactDetails = () => {
    const {control} = useFormContext();
    return ( <>
        <Controller control={control} name='email' render={({field}) =>(
            <TextField fullWidth id="email" label="Enter Your Email ID" variant='outlined' placeholder='Enter Your Email ID' margin="normal" {...field} />
        )} />
        <Controller control={control} name='mobile' render={({field}) =>(
            <TextField fullWidth id="mobile" label="Enter Your Contact Number" variant='outlined' placeholder='Enter Your Contact Number' margin="normal" {...field} />
        )} />
        <Controller control={control} name='telephone' render={({field}) =>(
            <TextField fullWidth id="telephone" label="Enter Your Telephone Number" variant='outlined' placeholder='Enter Your Telephone Number' margin="normal" {...field} />
        )} />
        <Controller control={control} name='alternate' render={({field}) =>(
            <TextField fullWidth id="alternate" label="Enter Your Alternate Number" variant='outlined' placeholder='Enter Your Alternate Number' margin="normal" {...field} />
        )} />
    </>
    );
}
const AddressDetails = () => {
    const {control} = useFormContext();
    return (  <>
        <Controller control={control} name='address' render={({field}) =>(
            <TextField fullWidth id="address" label="Enter Your Full Address" variant='outlined' placeholder='Enter Your Full Address' margin="normal" {...field} />
        )} />
        <Controller control={control} name='city' render={({field}) =>(
            <TextField fullWidth id="city" label="Enter Your City Name" variant='outlined' placeholder='Enter Your City Name' margin="normal" {...field} />
        )} />
        <Controller control={control} name='district' render={({field}) =>(
            <TextField fullWidth id="district" label="Enter Your District Name" variant='outlined' placeholder='Enter Your District Name' margin="normal" {...field} />
        )} />
        <Controller control={control} name='state' render={({field}) =>(
            <TextField fullWidth id="state" label="Enter Your State Name" variant='outlined' placeholder='Enter Your State Name' margin="normal" {...field} />
        )} />
        <Controller control={control} name='country' render={({field}) =>(
            <TextField fullWidth id="country" label="Enter Your Country Name" variant='outlined' placeholder='Enter Your Country Name' margin="normal" {...field} />
        )} />      
    </>
  );
}
const EducationalDetails = () => {
    const {control} = useFormContext();
    return (  <>
        <Controller control={control} name='tenth' render={({field}) =>(
            <FormControl sx={{ width:'25ch'}} > <TextField fullWidth id="tenth" label="Enter Your 10th Marks" variant='outlined' placeholder='Enter Your 10th Marks' margin="normal" {...field} /> </FormControl>
        )} />
        <Controller control={control} name='tenthschool' render={({field}) =>(
            <FormControl sx={{ width:'75ch', mx:3}} > <TextField fullWidth id="tenthschool" label="Enter Your School Name" variant='outlined' placeholder='Enter Your School Name' margin="normal" {...field} /> </FormControl>
        )} />
        <Controller control={control} name='twelve' render={({field}) =>(
            <FormControl sx={{ width:'25ch'}} > <TextField fullWidth id="twelve" label="Enter Your 12th Marks" variant='outlined' placeholder='Enter Your 12th Marks' margin="normal" {...field} /> </FormControl>
        )} />        
        <Controller control={control} name='twelveschool' render={({field}) =>(
            <FormControl sx={{ width:'75ch', mx:3}} > <TextField fullWidth id="twelveschool" label="Enter Your School Name" variant='outlined' placeholder='Enter Your School Name' margin="normal" {...field} /> </FormControl>
        )} />
        <Controller control={control} name='firstqualification' render={({field}) =>(
            <FormControl sx={{ width:'25ch'}} > <TextField fullWidth id="firstqualification" label="Enter Your 1st Qualification" variant='outlined' placeholder='Enter Your 1st Qualification' margin="normal" {...field} /> </FormControl>
        )} />
        <Controller control={control} name='firstqualimark' render={({field}) =>(
            <FormControl sx={{ width:'10ch', mx:3}} > <TextField fullWidth id="firstqualimark" label="Marks" variant='outlined' placeholder='Marks' margin="normal" {...field} /> </FormControl>
        )} />
        <Controller control={control} name='firstuniversity' render={({field}) =>(
            <FormControl sx={{ width:'75ch', mx:3}} > <TextField fullWidth id="firstuniversity" label="Enter Your College / University Name" variant='outlined' placeholder='Enter Your College / University Name' margin="normal" {...field} /> </FormControl>
        )} />              
    </>

    );
}
const PaymentDetails = () => {
    const {control} = useFormContext();
    return (   <>
        <Controller control={control} name='cardtype' render={({field}) =>(
            <TextField fullWidth id="cardtype" label="Enter Card Type (Like:- Rupay, Visa, Master Card)" variant='outlined' placeholder='Enter Card Type (Like:- Rupay, Visa, Master Card)' margin="normal" {...field} />
        )} />
        <Controller control={control} name='cardholder' render={({field}) =>(
            <TextField fullWidth id="cardholder" label="Enter Card Holder Name" variant='outlined' placeholder='Enter Card Holder Name' margin="normal" {...field} />
        )} />
        <Controller control={control} name='cardnumber' render={({field}) =>(
            <TextField fullWidth id="cardnumber" label="Enter Card Number" variant='outlined' placeholder='Enter Card Number' margin="normal" {...field} />
        )} />
        <Controller control={control} name='expire' render={({field}) =>(
            <FormControl sx={{ width:'50ch'}} > <TextField fullWidth id="expire" label="Enter Expiry Date" variant='outlined' placeholder='Enter Expiry Date' margin="normal" {...field} /> </FormControl>
        )} />
        <Controller control={control} name='cvv' render={({field}) =>(
            <FormControl sx={{ width:'50ch', mx:5}} > <TextField fullWidth id="cvv" label="Enter CVV Code" variant='outlined' placeholder='Enter CVV Code' margin="normal" {...field} /> </FormControl>
        )} /> 
      </>
    );
}

function getStepContent(step){
    switch(step){
            case 0:    return ( <PersonalDetails /> );
            case 1:    return ( <ContactDetails /> );
            case 2:    return ( <AddressDetails /> );
            case 3:    return ( <EducationalDetails /> );  
            case 4:    return( <PaymentDetails /> ) 
            default :  return (<>
            </>)
     
    }
}

const Form = () => {
        const [activeStep, setActiveStep] = useState(0);
        const [skipStep, setSkipStep] = useState([]);
        const steps = getSteps();
        const methods = useForm({
            defaultValues:{
               firstname: "", middlename: "", lastname: "", fathername:"", mothername: "",
               email: "", mobile: "", telephone: "", alternate: "",
               address: "", city:"", district: "", state:"", country: "",
               tenth: "", tenthschool:"", twelve: "", twelveschool: "", firstqualification:"", firstqualimark:"", firstuniversity:"",
               cardtype:"", cardholder:"", cardnumber:"", expire:"", cvv:"",
            },
        });

        const isOptional = (step) =>{
            return step === 3;
        }
        const isStepSkip = (step) =>{
            return skipStep.includes(step);
        };

        const handleNext = () =>{
            setActiveStep(activeStep + 1);
            setSkipStep(skipStep.filter((skipItem) => skipItem !== activeStep));
        };
        const handleBack = () =>{
            setActiveStep(activeStep - 1);
        };
        const handleSkip =() =>{
            if(!isStepSkip(activeStep)){
                setSkipStep([...skipStep, activeStep]);
            }
            setActiveStep(activeStep + 1);
        }
        const onSubmit = (data) => {
            console.log(data);
        }

        return (
            <div>
               { activeStep === steps.length ? ( 
                       <Typography variant="h5" align='center'> Thank You Submitting Form. Your Form is Submitted.</Typography> ) :
                       (
                         <>
                          <Stepper alternativeLabel activeStep={activeStep}>
                                {
                                    steps.map((step, index) =>{
                                        const labelProps = {};
                                        const stepProps = {};
                                        if(isOptional(index)){
                                            labelProps.optional=(
                                                <Typography variant="caption" align='center' style={{display:'block'}}>( Optional )</Typography>
                                            );
                                        } 
                                        if(isStepSkip(index)){
                                            stepProps.completed = false;
                                        }
                                        return(
                                            <Step {...stepProps} key={index}>
                                                <StepLabel {...labelProps}> {step} </StepLabel>
                                            </Step>
                                        )
                                    })
                                }   
                        </Stepper>
                         <br />
                            <FormProvider {...methods}>
                                <form onSubmit={methods.handleSubmit(onSubmit)}> {getStepContent(activeStep)} </form>
                                <Button sx={{ml:50, mr:5, mt:10}} variant='contained' disabled={activeStep === 0 } onClick={handleBack}> Back </Button>
                                { isOptional(activeStep) && (
                                    <Button sx={{mr:5, mt:10}} variant='contained' onClick={handleSkip} > Skip </Button>
                                ) }

                                <Button sx={{mt:10}} variant='contained' onClick={handleNext} type="submit"> { activeStep === steps.length-1 ? "Finish" : "Next" } </Button>
                            </FormProvider>
                            
                         </>
                       )
            }  
              </div>
  );
};

export default Form;
