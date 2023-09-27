export const personalInfoTemplate = {
    firstName: { internalUse: true, show: true },
    lastName: { internalUse: true, show: true },
    emailId: { internalUse: true, show: true },
    phoneNumber: { internalUse: false, show: false },
    nationality: { internalUse: false, show: false },
    currentResidence: { internalUse: false, show: false },
    idNumber: { internalUse: false, show: false },
    dateOfBirth: { internalUse: false, show: false },
    gender: { internalUse: false, show: false },
    personalQuestions: [],
  };
  
  export const profileTemplate = {
    education: { mandatory: false, show: false },
    experience: { mandatory: false, show: false },
    resume: { mandatory: false, show: false },
    profileQuestions: [],
  };
  
  export const InfoMap = [
    { feild: 'firstName', title: 'First Name', required: true },
    { feild: 'lastName', title: 'Last Name', required: true },
    { feild: 'emailId', title: 'Email', required: true },
    { feild: 'phoneNumber', title: 'Phone Number', required: false },
    { feild: 'nationality', title: 'Nationality', required: false },
    { feild: 'currentResidence', title: 'Current Residence', required: false },
    { feild: 'idNumber', title: 'ID Number', required: false },
    { feild: 'dateOfBirth', title: 'Date of Birth', required: false },
    { feild: 'gender', title: 'Gender', required: false },
  ];
  
  export const ProfileMap = [
    { feild: 'education', title: 'Education', required: false },
    { feild: 'experience', title: 'Experience', required: false },
    { feild: 'resume', title: 'Resume', required: false },
  ];
  
  export const QuesTypes = [
    { name: 'Paragraph', value: 'Paragraph' },
    { name: 'Short Answer', value: 'ShortAnswer' },
    { name: 'Yes/No', value: 'YesNo' },
    { name: 'Dropdown', value: 'Dropdown' },
    { name: 'Multiple Choice', value: 'MultipleChoice' },
    { name: 'Date', value: 'Date' },
    { name: 'Number', value: 'Number' },
    { name: 'File Upload', value: 'FileUpload' },
  ];